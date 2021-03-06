/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length >= 2) {
        let prevNonRepeatingElem = nums[0];

        for(let i = 1; i < nums.length; i++) {
            if(nums[i] === prevNonRepeatingElem) {
                nums.splice(i, 1);
                i--;
            } else {
                prevNonRepeatingElem = nums[i];
            }
        }
    }

    return nums.length;
};
