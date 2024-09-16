/*
Converts each word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.
*/

const pigLatin = function (args) {
  let translatedWords = [];
  for (let i = 2; i < args.length; i++) {
    let word = args[i];
    let pigLatinWord = word.slice(1) + word[0] + 'ay';
    translatedWords.push(pigLatinWord);
  }
  let translatedSentence = translatedWords.join(' ');
  console.log(translatedSentence);
  return translatedSentence;
}

pigLatin(process.argv)