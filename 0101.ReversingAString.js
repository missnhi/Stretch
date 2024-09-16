/*
Write a program that takes any number of command line arguments, all strings, and reverses them before outputting
 them one at a time to the console.
EX:
input: node 0101.ReversingAString.js hello goodbye
output: olleh
eybdoog
 */

const reverse = function () {
  for (let i = 2; i < process.argv.length; i++) {
    let reversed = process.argv[i].split('').reverse().join('');
    console.log(reversed);
  }
}

reverse();

