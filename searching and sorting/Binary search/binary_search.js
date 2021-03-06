function binary_search(arr, val){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== val && start <= end){ // check if val is middle and case to stop infinite loop
        if(val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : 'Not found';
}

console.log(binary_search([3,4,6,7,13,15,16], 13));