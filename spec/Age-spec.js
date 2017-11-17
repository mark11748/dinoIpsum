import { Age } from "./../js/Age.js";

describe('secondConverter', function(){
  it('should return 0 seconds', function(){
    const newDate = new Date();
    const newAge = new Age();
    const expected = 0;
    expect(newAge.secondConverter(newDate)).toEqual(expected);
  });
});
describe('secondConverter', function(){
  it('should return something greater than 0 seconds', function(){
    const newDate = new Date();
    newDate.setYear(2015);
    const newAge = new Age();
    const expected = 0;
    expect(newAge.secondConverter(newDate)).toBeGreaterThan(expected);
  });
});
describe('ageChecker', function(){
  it('should return 0 years', function(){
    const newDate = new Date();
    const newAge = new Age();
    const expected = 0;
    expect(newAge.ageChecker(newDate)).toEqual(expected);
  });
});
describe('ageChecker', function(){
  it('should return 2 years', function(){
    const newDate = new Date();
    newDate.setYear(2015);
    const newAge = new Age();
    const expected = 2;
    expect(newAge.ageChecker(newDate)).toEqual(expected);
  });
});
describe('ageChecker', function(){
  it('should return 2 years even with months attached', function(){
    const newDate = new Date();
    newDate.setYear(2015);
    newDate.setMonth(9);
    const newAge = new Age();
    const expected = 2;
    expect(newAge.ageChecker(newDate)).toEqual(expected);
  });
});
