const AnagramFinder = function (word) {
  this.word = 'act';
}

//Given a word and an array of other words you should be able to filter the array, leaving only the anagrams of the word in question in the array.

AnagramFinder.prototype.findAnagrams = function (otherWords) {

  return otherWords.filter((otherWord) => {

   const ordercheck = this.word.toLowerCase().split('').sort().every((letter) => {
      this.word.toLowerCase().split('').sort().indexOf(letter) === otherWord.toLowerCase().split('').sort().indexOf(letter);
});

    return (ordercheck === true && otherWord.length === this.word.length);

  });
};


//
// return otherWords.filter((otherWord) => {
//
//  const ordercheck = this.word.toLowerCase().split('').sort().every((letter) => {
//     this.word.toLowerCase().split('').sort().indexOf(letter) === otherWord.toLowerCase().split('').sort().indexOf(letter);
// });
//
//   return (ordercheck === true && otherWord.length === this.word.length);
//
// });
// };



// AnagramFinder.prototype.findAnagrams = function (otherWords) {
//   return otherWords.filter((otherWord) => {
//
//     return (this.checkIfInTheSameOrder(otherWord) === true && otherWord.length === this.word.length);
//   });
// };
//
//
// AnagramFinder.prototype.checkIfInTheSameOrder = function (otherWord) {
//   return this.word.toLowerCase().split('').sort().every((letter) => {
//     this.word.toLowerCase().split('').sort().indexOf(letter) === otherWord.toLowerCase().split('').sort().indexOf(letter);
//   });
// };


module.exports = AnagramFinder;
