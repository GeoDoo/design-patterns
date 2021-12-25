class CodeBuilder {
  #className;
  #fields;

  constructor(className) {
    this.#className = className;
    this.#fields = [];
  }

  addField(name) {
    this.#fields.push(name);

    return this;
  }

  toString() {
    const strConcats = [];
    strConcats.push(`class ${this.#className} {\n`);

    if (this.#fields.length > 0) {
      strConcats.push(`  constructor(`);

      for (let i = 0; i < this.#fields.length; ++i) {
        strConcats.push(this.#fields[i]);
        if (i + 1 !== this.#fields.length) strConcats.push(", ");
      }

      strConcats.push(`) {\n`);

      for (const field of this.#fields) {
        strConcats.push(`    this.${field} = ${field};\n`);
      }

      strConcats.push("  }\n");
    }

    strConcats.push("}");

    return strConcats.join("");
  }
}

module.exports = CodeBuilder;
