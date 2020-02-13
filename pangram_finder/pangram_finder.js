const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

//Given a sentence or phrase you should be able to determine whether or not every letter of the alphabet is included in it.


PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((letter) => {
    return this.phrase.toLowerCase().includes(letter)
  });
};

module.exports = PangramFinder;
