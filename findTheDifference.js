/**
https://leetcode.com/problems/find-the-difference/description/
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // for(let i=0; i<s.length; i++){
    //     let idx = t.indexOf(s[i]);
    //     t = t.substring(0, idx) + t.substring(idx+1);
    // }
    // return t;
    
    var hashS = {};
    var hashT = {};
    
    for(let i=0; i<s.length; i++){
        // count instances of each char in s
        if(!hashS[s[i]]) hashS[s[i]] = 1;   // initialize counter for that char
        else hashS[s[i]]++
    }
        
    for(let i=0; i<t.length; i++){
        // check if it doesn't exist in s 
        if(!hashS[t[i]]) return t[i];
        // count instances of each char in s
        if(!hashT[t[i]]) hashT[t[i]] = 1;   // initialize counter for that char
        else hashT[t[i]]++
    }
    
   var hashSKeys = Object.keys(hashS); 
   for(let i=0; i<hashSKeys.length; i++){
       if(hashS[hashSKeys[i]] != hashT[hashSKeys[i]]) return hashSKeys[i];
   }
};

