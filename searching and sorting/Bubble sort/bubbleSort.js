function bubbleSort(arr){
    const swap = (arr1, indx1, indx2) =>{
        [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]; //swap
    }

    for(let i=arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([23,35,29,8]));