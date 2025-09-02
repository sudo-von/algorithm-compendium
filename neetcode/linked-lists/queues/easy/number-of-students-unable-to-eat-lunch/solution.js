/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const cache = { 0: 0, 1: 0 };
  for (let i = 0; i < students.length; i++) {
    const current = students[i];
    cache[current]++;
  }
  for (let i = 0; i < sandwiches.length; i++) {
    const current = sandwiches[i];
    if (cache[current]) {
      cache[current]--;
    } else {
      return cache[0] + cache[1];
    }
  }
  return cache[0] + cache[1];
};