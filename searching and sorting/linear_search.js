//Finding the value in array and returning the index??
function linear_search(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === val) return i;
    }
    return 'Not Found!';
}
 console.log(linear_search([21,43,11,43,56,76,89,24,33], 31));