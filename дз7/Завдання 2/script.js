let MyMath = {
  a: 5,
  b: 2,
  sum: function () {
    console.log(`${this.a} + ${this.b} =`, `${this.a + this.b}`);
  },
  multiplication: function () {
    console.log(`${this.a} * ${this.b} =`, `${this.a * this.b}`);
  },
  division: function () {
    console.log(`${this.a} / ${this.b} =`, `${this.a * this.b}`);
  },
  subtraction: function () {
    console.log(`${this.a} - ${this.b} =`, `${this.a - this.b}`);
  },
};
MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();
