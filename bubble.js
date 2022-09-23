function bubbleSort(nums) {
  //compare first element with remaining elements, if larger, move up 1 and keep comparing
  // i is first loop, i is end of array
  // j is start
  for (let i = nums.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

module.exports = bubbleSort;