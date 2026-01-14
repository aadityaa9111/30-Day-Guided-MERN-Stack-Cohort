// addTwoNumbers
function addNumber(a,b){
    let sum=a+b;
    console.log("Sum:",sum)
}
addNumber(3,5);

// check Even or Odd
function evenOdd(a){
    if (a % 2 ==0){
        console.log("Even")
    }
    else{
        console.log('Odd')
    }
}
evenOdd(3);
evenOdd(8);

//largestOfThree
function largestOfThree(a,b,c){
    let largest;
    if(a>=b && a>=c){
        largest=a;
    }
    else if(b>=a && b>=c){
        largest=b;
    }
    else{
        largest=c;
    }

    console.log("largest of Three: ",largest)
}
largestOfThree(20,30,50);
largestOfThree(80,20,40);
largestOfThree(20,60,50);

