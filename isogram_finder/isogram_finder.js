const IsogramFinder = function (word) {
  this.word = word;
}

//Given a word, phrase or sentence you should be able to determine whether or not it is an isogram. That is, you should be able to determine whether every letter is unique.

IsogramFinder.prototype.isIsogram = function () {
  const uniqueLetters = [];
  let result = this.word.split('').forEach((letter) => {
    if (uniqueLetters.includes(letter) === false) {
      uniqueLetters.push(letter);
    };
  });
  if (uniqueLetters.length === this.word.split('').length) {
    return true;
  } else {
    return false;
  };
};

module.exports = IsogramFinder;
