var assert = require("assert");
var maths = require("../src/MathsModule");

describe("Maths", function () {
  describe("#plus()", function () {
    it("should return sum of two values", function () {
      for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
          assert.equal(maths.plus(i, j), i + j);
        }
      }
    });
  });
  describe("#minus()", function () {
    it("should return difference between two values", function () {
      for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
          assert.equal(maths.minus(i, j), i - j);
        }
      }
    });
  });
});
