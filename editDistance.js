function editDistance (x, y)
{
  if (x == "")
     return y.length; // base case
  else if (y == "")
     return x.length; // base case
  else
    {
      var addDistance = editDistance(x, y.substring(0,y.length-1)) + 1;
      var removeDistance = editDistance(x.substring(0,x.length-1), y) + 1;
      var changeDistance = editDistance(x.substring(0,x.length-1), 
                                        y.substring(0,y.length-1)) 
        + (x[x.length-1] == y[y.length-1]) ? 0 : 1;
      return Math.min(Math.min(addDistance, removeDistance), changeDistance);
    }
}

console.log(editDistance("pales", "ple"));
/*
console.log('\nTests:');
console.log(1, oneAway("pale", "ple") === true);
console.log(1, oneAway("pale", "ple"));
console.log(2, oneAway("pales", "pale") === true);
console.log(3, oneAway("pale", "bae") === false);
console.log(4, oneAway("pale", "elap") === false);
console.log(5, oneAway("", "") === true);
console.log(6, oneAway("a", "") === true);
console.log(7, oneAway("", "b") === true);
console.log(8, oneAway("a", "b") === true);
console.log(9, oneAway("hat", "bat") === true);
console.log(10, oneAway("hat", "heat") === true);
console.log(11, oneAway("hat", "at") === true);
console.log(12, oneAway("hat", "that") === true);
console.log(13, oneAway("that", "hat") === true);
console.log(14, oneAway("spat", "hat") === false);
console.log(15, oneAway("spat", "stap") === false);
console.log(16, oneAway("splat", "spat") === true);
console.log(17, oneAway("car", "race") === false);
console.log(18, oneAway("care", "car") === true);
console.log(19, oneAway("care", "cares") === true);
console.log(20, oneAway("cores", "care") === false);
*/
