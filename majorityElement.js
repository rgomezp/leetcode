/**
https://leetcode.com/problems/majority-element/description/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var hash = {};
    for(let i=0; i<nums.length; i++){
        if(!hash[nums[i]]) hash[nums[i]] = 0;
        hash[nums[i]]++;
    }
    var hashKeys = Object.keys(hash);
    for(let i=0; i<hashKeys.length; i++){
        if(hash[hashKeys[i]] > Math.floor(nums.length/2)) return parseInt(hashKeys[i]);
    }
};
