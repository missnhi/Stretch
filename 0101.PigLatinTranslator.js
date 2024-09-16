/*
Write a program that takes any number of command line arguments, converts each to pig latin (the rules are in the next
paragraph), then puts the translated words together into one sentence logged to the console.

The true pig latin rules would be a bit difficult to implement, so let's simplify them. Convert a word to pig latin
by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

node 0101.PigLatinTranslator.js pig latin
igpay atinlay

node 0101.PigLatinTranslator.js this is all just gibberish
histay siay llaay ustjay ibberishgay
 */

const pigLatin = function () {
  let retString = '';
  for (let i = 2; i < process.argv.length; i++) {
    let word = process.argv[i];
    let pigLatinWord = word.slice(1) + word[0] + 'ay';
    retString += pigLatinWord + ' ';
  }
  console.log(retString);
  return retString;
}

pigLatin()