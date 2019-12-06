// Find out factorial of a number?
// Iterative way
function factorial(num){
    let total = 1;
    for(let i=num; i>1; i--){
        total *= i;
    }
    return total;
}

console.log(factorial(6));

// Recursive way
function fact(n){
    if(n === 1) return 1; //Base case(function halt).
    return n*fact(n-1); //Recursive call
}

console.log(fact(5));