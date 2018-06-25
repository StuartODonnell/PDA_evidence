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

  it('concatenate multiple number button clicks', function(){
    calculator.previousTotal = 0;
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.numberClick(1);
    assert.strictEqual(calculator.runningTotal, 111);
  })

  it('should be able to divide running total',function(){
    calculator.numberClick(6);
    calculator.operatorClick("/");
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(10);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("-");
    calculator.numberClick(1);
    calculator.operatorClick("=");

    assert.strictEqual(calculator.runningTotal, 24);
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(6);
    calculator.operatorClick("/");
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should return an error if trying to divide by 0', function(){
    calculator.numberClick(6);
    calculator.operatorClick("/");
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.strictEqual(calculator.runningTotal, "cannot divide by 0");
  })

});
