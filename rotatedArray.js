
function getMin(arr){
  if(arr.length == 0) return -1;
  if(arr.length == 1) return 0;
  
  let left = 0;
  let right = arr.length-1;
  let mid = Math.floor((left+right)/2);
  
  if(arr[left] < arr[right]) return 0;
  
  while(right-left > 1){
    if(arr[mid] > arr[left]) left = mid;
    else right = mid;
    mid = Math.floor((left+right)/2);
  }
  return left+1;
}

function checkCase(val, truth){
	if(val == truth) console.log(true);
	else console.log("false - res:",val,"truth:",truth);
}

(function testing(){
	checkCase(getMin([5,7,8,9,1,2,4]),4);
	checkCase(getMin([3,4,1,2]),2);
	checkCase(getMin([5,2]), 1);
	checkCase(getMin([0,2]), 0);
	checkCase(getMin([9,1,2,3]),1);
	checkCase(getMin([1,2,3]),0);
	checkCase(getMin([3,4,6,9,1,2,3]),4);
	checkCase(getMin([1,3,4,6,9,0]),5);
	checkCase(getMin([0]),0);
	checkCase(getMin([10,20,30,40,-100,-50,-25]),4);
})();

