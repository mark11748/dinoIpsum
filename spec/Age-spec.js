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
    newAge.ageChecker(newDate)
    expect(newAge.age).toEqual(expected);
  });
});
describe('ageChecker', function(){
  it('should return 2 years', function(){
    const newDate = new Date();
    newDate.setYear(2015);
    const newAge = new Age();
    const expected = 2;
    newAge.ageChecker(newDate)
    expect(newAge.age).toEqual(expected);
  });
});
describe('ageChecker', function(){
  it('should return 2 years even with months attached', function(){
    const newDate = new Date();
    newDate.setYear(2015);
    newDate.setMonth(9);
    const newAge = new Age();
    const expected = 2;
    newAge.ageChecker(newDate)
    expect(newAge.age).toEqual(expected);
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
    newAge.ageChecker(newDate)
    expect(newAge.age).toEqual(expected);
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
    newAge.mercuryConverter(newDate)
    expect(newAge.mercury).toEqual(expected);
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
    newAge.venusConverter(newDate)
    expect(newAge.venus).toEqual(expected);
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
    newAge.marsConverter(newDate)
    expect(newAge.mars).toEqual(expected);
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
    newAge.jupiterConverter(newDate)
    expect(newAge.jupiter).toEqual(expected);
  });
});
describe('yearsToLive', function(){
  it('should return 269 years', function(){
    const newDate = new Date();
    newDate.setYear(1997);
    newDate.setMonth(3);
    newDate.setDate(8);
    const newAge = new Age();
    const expected = 269;
    newAge.mercuryConverter(newDate)
    expect(newAge.yearsToLive("Mercury")).toEqual(expected);
  });
});
describe('yearsToLive', function(){
  it('should return 104 years', function(){
    const newDate = new Date();
    newDate.setYear(1997);
    newDate.setMonth(3);
    newDate.setDate(8);
    const newAge = new Age();
    const expected = 104;
    newAge.venusConverter(newDate)
    expect(newAge.yearsToLive("Venus")).toEqual(expected);
  });
});
describe('yearsToLive', function(){
  it('should return 35 years', function(){
    const newDate = new Date();
    newDate.setYear(1997);
    newDate.setMonth(3);
    newDate.setDate(8);
    const newAge = new Age();
    const expected = 35;
    newAge.marsConverter(newDate)
    expect(newAge.yearsToLive("Mars")).toEqual(expected);
  });
});
describe('yearsToLive', function(){
  it('should return 6 years', function(){
    const newDate = new Date();
    newDate.setYear(1997);
    newDate.setMonth(3);
    newDate.setDate(8);
    const newAge = new Age();
    const expected = 6;
    newAge.jupiterConverter(newDate)
    expect(newAge.yearsToLive("Jupiter")).toEqual(expected);
  });
});
describe('yearsToLive', function(){
  it('should return "Youre older than the average life expectancy!" years', function(){
    const newDate = new Date();
    newDate.setYear(1800);
    newDate.setMonth(3);
    newDate.setDate(8);
    const newAge = new Age();
    const expected = "You're older than the average life expectancy!";
    newAge.mercuryConverter(newDate)
    newAge.venusConverter(newDate)
    newAge.marsConverter(newDate)
    newAge.jupiterConverter(newDate)
    expect(newAge.yearsToLive("Mercury")).toEqual(expected);
    expect(newAge.yearsToLive("Venus")).toEqual(expected);
    expect(newAge.yearsToLive("Mars")).toEqual(expected);
    expect(newAge.yearsToLive("Jupiter")).toEqual(expected);
  });
});
