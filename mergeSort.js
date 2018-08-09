function mergeSort(array){
	//console.log(array);
	if(array.length <= 1){
		return array;
	}
	var mid = Math.floor(array.length / 2);
	var leftArr = array.slice(0, mid);
	var rightArr = array.slice(mid);
	//console.log(leftArr, rightArr);

	var left = mergeSort(leftArr);
	var right = mergeSort(rightArr);
	return merge(left, right, array);
};

function merge(A, B, arr){
	var i = j = k = 0;
	var next;
	var leftDone = false;
	var rightDone = false;

	while(i < A.length && j < B.length){	// while i or j not at end
		if(A[i] <= B[j]){
			arr[k] = A[i];
			i++;
		}else{
			arr[k] = B[j];
			j++;
		}	
		k++;
	}
	while(i < A.length){
		arr[k] = A[i];
		i++;
		k++;
	}
	while(j < B.length){
		arr[k] = B[j];
		j++;
		k++;
	}
	return arr;
}


console.log(mergeSort([1,5,7,2,3,10,0,9,4,22]));
