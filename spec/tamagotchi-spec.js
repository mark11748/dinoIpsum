import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function () {
  let tommy = new Tamagotchi("Tommy");

  beforeEach(function() {
    jasmine.clock().install();
    tommy.setWatch();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    tommy.setWatch(false);
    tommy.timer = 30;
  });

  it('should have a name and start with a countdown time of 30', function() {
    expect(tommy.name).toEqual("Tommy");
    expect(tommy.timer).toEqual(30);
  });

  it('should have a time of 23 seconds after 7001 milliseconds', function() {
    jasmine.clock().tick(8001);
    expect(tommy.timer).toEqual(22);
  });

  it('should have a time of 0 at 30000 milliseconds', function() {
    jasmine.clock().tick(30000);
    expect(tommy.timer).toEqual(0);
  });

  it('should have a time of 30 after 31000 milliseconds', function() {
    jasmine.clock().tick(31000);
    expect(tommy.timer).toEqual(30);
  });

  it('should add 5 seconds to the timer when user clicks Feed button', function() {
    tommy.feedTommy();
    expect(tommy.timer).toEqual(35);
  });
});
