/**
 * FizzBuzz Problem:
 *  -  given a number n where n >=1
 * Input:Number
 * Test case  number 20
 *  - Print numbers from 1 to 20.
 *      - For multiples of 3, print "fizz" instead of the number.
 *      - For multiples of 5, print "buzz" instead of the number.
 *      - For numbers divisible by both 3 and 5, print "fizzBuzz".
 *      - For all other numbers, print the number itself.
 */

let number = prompt("Enter the Number");
for (let i = 1; i <= number; i++) {
    // console.log("number is",i);
     if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizz buzz")
    }
    else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


