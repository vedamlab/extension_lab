

/***
 * function definition
 * function call
 * pass parameter
 * accept argument
 * return a value
 * **/ 
// arguments
// function myfn(a,b){
//     // logic of the function
//     console.log("Hello");
//     // retrun value
//     return 10;
// }

// // function call
// myfn();
// // parameter
// myfn(10,20)



/***
 * 1. create a function that checks user input for even or odd 
 * ***/ 

function checkEven(num){
   let isEven= num % 2 == 0;
    return isEven;
}
let input1=prompt("Enter Input");  //10
let reval=checkEven(input1);
console.log("reval",reval);
let input2=prompt("Enter Input again");//21
let reval2=checkEven(input2);
console.log("reval2",reval2);