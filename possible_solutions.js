const UpperCaser = function (words) {
    this.words = words;
}
UpperCaser.prototype.toUpperCase = function () {
    return this.words.map((word) => {
        return word.toUpperCase();
    })
}
module.exports = UpperCaser;


//==========================================================


const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}
PangramFinder.prototype.isPangram = function () {
  for (const letter of this.alphabet) {
    if (!this.phrase.toLowerCase().includes(letter)) {
      return false;
    }
  }
  return true;
  const regEx = /[^a-z]/g;
  const lowerCasePhrase = this.phrase.toLowerCase();
  const lettersOnly = lowerCasePhrase.replace(regEx, '');
  const uniqueLettersOnly = String.prototype.concat(...new Set(lettersOnly));
  return uniqueLettersOnly.length == this.alphabet.length;
  const lowerCasePhrase = this.phrase.toLowerCase();
  const result =this.alphabet.every((letter) => {
    return lowerCasePhrase.includes(letter);
  });
  return result;
}

//==========================================================

const IsogramFinder = function (word) {
    this.word = word;
}
IsogramFinder.prototype.isIsogram = function () {
    const lowerCaseLetters = this.word.toLowerCase().split('');
    const uniqueLetters = new Set(lowerCaseLetters);
    console.log(uniqueLetters.size,
                '  ==>>  ',
                this.word.length,
                (uniqueLetters.size == this.word.length))
    return (uniqueLetters.size == this.word.length);


//-----
    const uniqueLetters = [];
    let result = this.word.split('').forEach((letter) => {
        if (uniqueLetters.includes(letter) === false) {
            uniqueLetters.push(letter);
        }
    });
    if (uniqueLetters.length === this.word.split('').length) {
        return true;
    } else {
        return false;
    }
//--------

    const string = this.word.toLowerCase().split('');
    const result = string.every((char, index) => {
        return string.indexOf(char) === index;
    })
    return result;
}
module.exports = IsogramFinder;

//==========================================================

const AnagramFinder = function (word) {
    this.word = word;
}
AnagramFinder.prototype.findAnagrams = function (otherWords) {
    let sortedWordToFind = this.sort(this.word);
    let result = otherWords.filter((word) => {
        if (word != this.word) {
            let newOtherWord = this.sort(word);
            return newOtherWord == sortedWordToFind;
        }
    });
    return result;
}
AnagramFinder.prototype.sort = function(word) {
    let lowerCaseWord = word.toLowerCase();
    let wordArray = lowerCaseWord.split('');
    let sortedWords = wordArray.sort();
    return sortedWords.join('');
}
module.exports = AnagramFinder;
