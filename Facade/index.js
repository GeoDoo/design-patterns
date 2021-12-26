class Generator {
  generate(count) {
    const result = [];

    for (let i = 0; i < count; ++i)
      result.push(Math.floor(Math.random() * 6 + 1));

    return result;
  }
}

class Splitter {
  split(array) {
    const result = [];
    const rowCount = array.length;
    const colCount = array[0].length;

    // get the rows
    for (let r = 0; r < rowCount; ++r) {
      const theRow = [];

      for (let c = 0; c < colCount; ++c) theRow.push(array[r][c]);

      result.push(theRow);
    }

    // get the columns
    for (let c = 0; c < colCount; ++c) {
      const theCol = [];

      for (let r = 0; r < rowCount; ++r) theCol.push(array[r][c]);

      result.push(theCol);
    }

    // now the diagonals
    const diag1 = [];
    const diag2 = [];

    for (let c = 0; c < colCount; ++c) {
      for (let r = 0; r < rowCount; ++r) {
        if (c === r) diag1.push(array[r][c]);

        const r2 = rowCount - r - 1;

        if (c === r2) diag2.push(array[r][c]);
      }
    }

    result.push(diag1);
    result.push(diag2);

    return result;
  }
}

class Verifier {
  verify(array) {
    if (array.length < 1) return false;

    const adder = function (p, c) {
      return p + c;
    };

    const expected = array[0].reduce(adder);
    let ok = true;

    array.forEach(function (subarray) {
      if (subarray.reduce(adder) !== expected) {
        ok = false;
      }
    });

    return ok;
  }
}

class MagicSquareGenerator {
  generate(size) {
    const generator = new Generator();
    const splitter = new Splitter();
    const verifier = new Verifier();

    let square;

    do {
      square = [];
      for (let i = 0; i < size; ++i) square.push(generator.generate(size));
    } while (!verifier.verify(splitter.split(square)));

    return square;
  }
}

module.exports = MagicSquareGenerator;
