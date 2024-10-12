/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  // Edge case: If there are no intervals, we don't need any groups.
  if (intervals.length === 0) return 0;

  let rooms = 0; // To count how many groups (or 'rooms') we need
  let e = 0; // Pointer for tracking end times

  // Step 1: Extract all start times and end times from the intervals.
  const startTimes = intervals
    .map((interval) => interval[0])
    .sort((a, b) => a - b);
  const endTimes = intervals
    .map((interval) => interval[1])
    .sort((a, b) => a - b);

  /**
   * Explanation of startTimes and endTimes:
   * Example: intervals = [[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]]
   * startTimes = [1, 1, 2, 5, 6]   // Extracted and sorted start times
   * endTimes = [3, 5, 8, 10, 10]   // Extracted and sorted end times
   */

  // Step 2: Iterate through the start times to decide how many rooms are needed
  for (let i = 0; i < intervals.length; i++) {
    /**
     * If the current start time is less than or equal to the current end time,
     * it means we have a conflict, i.e., the current interval starts before or when
     * the previous one ends, so we need an additional group (room).
     */
    if (startTimes[i] <= endTimes[e]) {
      rooms++; // We need a new group (room) since the interval overlaps with the previous ones.
    } else {
      // If the current interval starts after the previous one ends, we can use the same group.
      e++; // Move the end pointer to the next end time, meaning we can "reuse" the group.
    }
  }

  /**
   * Example Walkthrough (Input: [[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]]):
   *
   * startTimes: [1, 1, 2, 5, 6]
   * endTimes:   [3, 5, 8, 10, 10]
   *
   * i = 0: startTimes[0] = 1, endTimes[0] = 3 -> startTime <= endTime -> rooms = 1
   * i = 1: startTimes[1] = 1, endTimes[0] = 3 -> startTime <= endTime -> rooms = 2
   * i = 2: startTimes[2] = 2, endTimes[0] = 3 -> startTime <= endTime -> rooms = 3
   * i = 3: startTimes[3] = 5, endTimes[0] = 3 -> startTime > endTime -> e++ (reuse room)
   * i = 4: startTimes[4] = 6, endTimes[1] = 5 -> startTime > endTime -> e++ (reuse room)
   *
   * Result: rooms = 3 (We need 3 groups)
   */

  // Return the total number of groups (rooms) needed.
  return rooms;
};
