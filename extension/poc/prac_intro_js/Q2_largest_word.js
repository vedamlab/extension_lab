// given a sentence from the user you have to print largest
// word in that sentence

let sentence = prompt("please enter sentence");
sentence = sentence.trim();
let arrWords = sentence.split(" ");

let largestWord = arrWords[0];
for (let i = 1; i < arrWords.length; i++) {
    let currWord = arrWords[i];
    if (currWord.length > largestWord.length) {
        largestWord = currWord;
    }
}
console.log("largest word is",largestWord);


// "Brown fox jumped Over the building" -> "Brown Fox Jumped Over The Building"