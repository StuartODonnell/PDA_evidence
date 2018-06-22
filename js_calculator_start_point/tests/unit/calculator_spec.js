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
  calculator.add(5);
  assert.strictEqual(calculator.runningTotal, 6);
})

it('should be able to subtract from running total',function(){
calculator.previousTotal = 5;
calculator.subtract(4);
assert.strictEqual(calculator.runningTotal, 1);
})

it('should be able to multiply running total',function(){
calculator.previousTotal = 5;
calculator.multiply(4);
assert.strictEqual(calculator.runningTotal, 20);
})


});


// calculator.multiply()
// calculator.divide()
// calculator.numberClick()
// calculator.operatorClick()
// calculator.clearClick()
