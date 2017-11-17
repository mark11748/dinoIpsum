import { Age } from "./../js/Age.js";

describe('secondConverter', function(){
  it('should return 0 seconds', function(){
    const newDate = new Date();
    const newAge = new Age();
    const expected = 0;
    expect(Math.floor(newAge.secondConverter(newDate))).toEqual(expected);
  });
});
describe('secondConverter', function(){
  it('should return something greater than 0 seconds', function(){
    const newDate = new Date();
    newDate.setYear(2015);
    const newAge = new Age();
    const expected = 0;
    expect(Math.floor(newAge.secondConverter(newDate))).toBeGreaterThan(expected);
  });
});
describe('ageChecker', function(){
  it('should return 0 years', function(){
    const newDate = new Date();
    const newAge = new Age();
    const expected = 0;
    expect(Math.floor(newAge.ageChecker(newDate))).toEqual(expected);
  });
});
describe('ageChecker', function(){
  it('should return 2 years', function(){
    const newDate = new Date();
    newDate.setYear(2015);
    const newAge = new Age();
    const expected = 2;
    expect(Math.floor(newAge.ageChecker(newDate))).toEqual(expected);
  });
});
describe('ageChecker', function(){
  it('should return 2 years even with months attached', function(){
    const newDate = new Date();
    newDate.setYear(2015);
    newDate.setMonth(9);
    const newAge = new Age();
    const expected = 2;
    expect(Math.floor(newAge.ageChecker(newDate))).toEqual(expected);
  });
});
describe('ageChecker', function(){
  it('should return 20 years even with months and days attached', function(){
    const newDate = new Date();
    newDate.setYear(1997);
    newDate.setMonth(3);
    newDate.setDate(8);
    const newAge = new Age();
    const expected = 20;
    expect(Math.floor(newAge.ageChecker(newDate))).toEqual(expected);
  });
});
describe('mercuryConverter', function(){
  it('should return 85 years', function(){
    const newDate = new Date();
    newDate.setYear(1997);
    newDate.setMonth(3);
    newDate.setDate(8);
    const newAge = new Age();
    const expected = 85;
    expect(Math.floor(newAge.mercuryConverter(newDate))).toEqual(expected);
  });
});
describe('venusConverter', function(){
  it('should return 33 years', function(){
    const newDate = new Date();
    newDate.setYear(1997);
    newDate.setMonth(3);
    newDate.setDate(8);
    const newAge = new Age();
    const expected = 33;
    expect(Math.floor(newAge.venusConverter(newDate))).toEqual(expected);
  });
});
describe('marsConverter', function(){
  it('should return 10 years', function(){
    const newDate = new Date();
    newDate.setYear(1997);
    newDate.setMonth(3);
    newDate.setDate(8);
    const newAge = new Age();
    const expected = 10;
    expect(Math.floor(newAge.marsConverter(newDate))).toEqual(expected);
  });
});
describe('jupiterConverter', function(){
  it('should return 1 years', function(){
    const newDate = new Date();
    newDate.setYear(1997);
    newDate.setMonth(3);
    newDate.setDate(8);
    const newAge = new Age();
    const expected = 1;
    expect(Math.floor(newAge.jupiterConverter(newDate))).toEqual(expected);
  });
});
