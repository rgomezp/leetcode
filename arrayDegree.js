/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var degree = findDegree(nums).degree;
    var values = findDegree(nums).values;      // values ass. w/ degrees
    var left;               // left delimiter
    var right;              // right delimiter
    var minDiff = [0, Infinity]
    
    // if there's a tie
    if(values.length > 1){
        for(let i=0; i<values.length; i++){
            // trim from left
            for(let j=0; j<nums.length; j++){
                if(nums[j] == values[i]){
                    left = j;
                    break;
                }
            }
            // trim from right
            for(let j=nums.length-1; j>=0; j--){
                if(nums[j] == values[i]){
                    right = j;
                    break;
                }
            }
            if(right-left<minDiff[1]-minDiff[0]) minDiff = [left, right];
        }
        return minDiff[1]-minDiff[0]+1;
        
    }else{
        // -- no tie --
        // trim from left
        for(let i=0; i<nums.length; i++){
            if(nums[i] == values[0]){
                left = i;
                break;
            }
        }
        // trim from right
        for(let i=nums.length-1; i>=0; i--){
            if(nums[i] == values[0]){
                right = i;
                break;
            }
        }
    }
    return right-left+1;
};

var findDegree = function(nums){
    var hash = {};
    for(let i=0; i<nums.length; i++){
        if(!hash[nums[i]]) hash[nums[i]] = 0;
        hash[nums[i]]++;
    }
    var hashKeys = Object.keys(hash);
    var degree = -1;
    for(let i=0; i<hashKeys.length; i++){
        if(degree < hash[hashKeys[i]]) degree = hash[hashKeys[i]];
    }
    
    // put highest degree values into array and return 
    var retArr = [];
    for(let i=0; i<hashKeys.length; i++){
        if(hash[hashKeys[i]] == degree) retArr.push(hashKeys[i]);
    }
    return {degree: degree, values:retArr};
}
