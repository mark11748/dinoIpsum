import { Age } from "./../js/Age.js";

describe('ageChecker', function(){
  it('should return 3 numbers', function(){
    const newDate = new Date();
    const dateChange = newDate.setFullYear(2016, 9, 16);
    const newAge = new Age(dateChange);
    const expected = 111;
    expect(newAge.ageChecker()).toEqual(expected);
  });
});
