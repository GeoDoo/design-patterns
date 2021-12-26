class Sentence {
  constructor(sentence) {
    this.words = sentence.split(" ");
  }

  at(index) {
    this.index = index;

    return this;
  }

  set capitalize(yes) {
    if (yes) {
      this.words[this.index] = this.words[this.index].toUpperCase();
    }
  }

  toString() {
    return this.words.join(" ");
  }
}

module.exports = Sentence;
