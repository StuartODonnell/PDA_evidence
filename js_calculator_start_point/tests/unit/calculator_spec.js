var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add to running total',function(){
  calculator.previousTotal = 1;
  calculator.add(4);
  assert.strictEqual(calculator.runningTotal, 5);
})

it('should be able to subtract from running total',function(){
calculator.previousTotal = 7;
calculator.subtract(4);
assert.strictEqual(calculator.runningTotal, 3);
})

it('should be able to multiply running total',function(){
calculator.previousTotal = 3;
calculator.multiply(5);
assert.strictEqual(calculator.runningTotal, 15);
})

it('should be able to divide running total',function(){
calculator.previousTotal = 21;
calculator.divide(7);
assert.strictEqual(calculator.runningTotal, 3);
})

});

// multiply 3x5 and get 15
// divide 21/7 and get 3
// add 1+4 and get 5
// subtract 7-4 and get 3
// calculator.multiply()
// calculator.divide()
// calculator.numberClick()
// calculator.operatorClick()
// calculator.clearClick()
