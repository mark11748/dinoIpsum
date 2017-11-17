import { Age } from "./../js/Age.js";

describe('ageChecker', function(){
  it('should return 3 numbers', function(){
    const newDate = new Date(2017, 10, 17);
    const newAge = new Age();
    const expected = 0;
    expect(newAge.ageChecker(newDate)).not.toBeLessThan(expected);
  });
});
