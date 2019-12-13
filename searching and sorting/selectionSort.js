function selectionSort(arr){
    const swap = (arr, indx1, indx2) => 
    ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);

    for(let i=0; i<arr.length; i++){
        let lowest = i;
        for(let j=i; j<arr.length; j++){
            if(arr[lowest] > arr[j]){
                lowest = j;
            }
        }
        if(i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}

console.log(selectionSort([32,12,43,22,3,7,1]));