import { getInputtedDate, switchTest } from './../src/business.js';

describe( 'getInputtedDate', function() {

  it('should accept and inputted date and assigns index of 0-6 for M-F', function() {
    let value = "2018-10-01";
    var result = getInputtedDate(value);
    console.log(result);
    expect(result).toEqual(0);
  });
});
describe('switchTest', function() {
  it('should take 0-6 numbers and translate that into a date M-S', function() {
    let day = 0;
    let switchResult = switchTest(day);
    expect(switchResult).toEqual("Monday");
  });

});
