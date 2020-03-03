//takes less steps if the array is almost sorted
function bubbleSort(arr){
    let noSwap;
    for(let i=arr.length; i>0; i--){
        noSwap = true;
        for(let j=0; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] =arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([9,1,2,3,4,5]));