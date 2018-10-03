import { getInputtedDate } from './../src/business.js';

describe( 'getInputtedDate', function() {

  it('should accept and inputted date and assigns index of 0-6 for M-F', function() {
    let value = "2018-10-01";
    var result = getInputtedDate(value);
    console.log(result);
    expect(result).toEqual(0);
  });
});
