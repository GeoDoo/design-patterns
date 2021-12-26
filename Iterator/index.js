class Node {
  constructor(...values) {
    this.values = [];
    values.forEach((v) => {
      if (v instanceof Node) {
        this.values.push(v.values.join(''));

        return;
      }

      this.values.push(v);
    });
  }

  preorder() {
    return this.values.sort();
  }
}

module.exports = Node;
