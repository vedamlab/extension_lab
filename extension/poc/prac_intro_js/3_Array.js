// let arr=[];
//  array
// arr=[]
// // at index 0 =10
// arr[0]=10;
// // at index 1=20
// arr[1]=20;
// // at index 2 =30
// arr[2]=30;

// // length
// console.log("length",arr.length);

// for(let i=0;i<arr.length;i++){
//     console.log("index",i,"value",arr[i]);
// }

// strings

// let myStr="Hello";
// let myAnotherStr='Hello';

let query ="   hey how are you   ";
let trimmedquery=query.trim();
console.log("query",query);
console.log("trimmedquery",trimmedquery);
console.log("query length",query.length);
console.log("32", "first char in string", 
    trimmedquery.charAt(0));
let searchQuery=prompt("What to search");
console.log("36",searchQuery);
searchQuery=searchQuery.trim();
console.log("38",searchQuery);
let strArr=searchQuery.split(" ");
console.log("strArr",strArr);
let finalStr=strArr.join("+");
console.log("finalStr",finalStr);


