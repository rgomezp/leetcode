function selectionSort(array){
	for(let i=0; i<array.length; i++){
		var min = i;
		for(let j=i+1; j<array.length; j++){
			if(array[j] < array[min]) min = j;
		}
		// swap
		if(array[i] != array[min]){
			var temp = array[min];
			array[min] = array[i];
			array[i] = temp;
		}
	}
	return array;
}

console.log(selectionSort([5,4,1,2,7,1,12,0,0,3]));
