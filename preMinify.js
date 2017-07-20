/* eslint-disable */
var hello = 'Hello';
var hi = 'hi';
var howdy = 'howdy';
var hola = 'hola';

var wordsArr = [hello, hi, howdy, hola];

function doubleWordsArr() {
  return wordsArr.map(function(x) {
    console.log(x);
    return x + x;
  });
}

var doubleWordsArr = doubleWordsArr();
console.log(doubleWordsArr);
