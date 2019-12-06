// Counting numbers in decending order?
//Iteratively
function countDown(num){
    for(let i=num; i>0; i--){
        console.log(i);
    }
    console.log("Finished");
}

countDown(5);

//Recursively
function count(n){
    if(n <= 0){
        console.log("Finished"); //Base Case.
        return;
    }
    console.log(n);
    n--;
    count(n); //Recursive call
}

count(6);