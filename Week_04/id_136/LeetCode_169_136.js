/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, ret = 0
    for(let i=0; i<nums.length; i++) {
        if(count == 0) {
            ret = nums[i]
        }
        if(nums[i] != ret) {
            count--
        } else {
            count++
        }
    }
    return ret
};