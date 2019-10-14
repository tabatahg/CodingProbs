/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    a = nums[i];
    x1 = i;
    for (let j = 0; j < nums.length; j++) {
      y1 = j;
      if (i === j) {
        continue;
      } else {
        x = nums[j] + a;
      }
      if (x === target) {
        return [x1, y1];
      }
    }
  }
};
