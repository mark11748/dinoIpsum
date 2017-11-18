export class Age {
  constructor() {
    this.age = 0;
    this.mars = 0;
    this.venus = 0;
    this.mercury = 0;
    this.jupiter = 0;
    this.lifeExpectancy = 85;
  }
  secondConverter(theInputtedThing) {
    const today = new Date();
    let todaysSeconds = today.getTime();
    let datesSeconds = theInputtedThing.getTime();
    let totalSeconds = (todaysSeconds - datesSeconds)/1000;
    return (totalSeconds);
  }
  ageChecker(date) {
    const seconds = this.secondConverter(date);
    const years = seconds / 3.154e+7;
    this.age = Math.floor(years);
    return(years);
  }
  mercuryConverter(date) {
    const mercury = this.ageChecker(date)/.24;
    this.mercury = Math.floor(mercury);
  }
  venusConverter(date) {
    const venus = this.ageChecker(date)/.62;
    this.venus = Math.floor(venus);
  }
  marsConverter(date) {
    const mars = this.ageChecker(date)/1.88;
    this.mars = Math.floor(mars);
  }
  jupiterConverter(date) {
    const jupiter = this.ageChecker(date)/11.86;
    this.jupiter = Math.floor(jupiter);
  }
  yearsToLive(choice) {
    if(choice === "Mercury") {
      let lifeLeft = (Math.floor(this.lifeExpectancy/.24) - this.mercury);
      if(lifeLeft < 0) {
        return("You're older than the average life expectancy!");
      } else {
        return(lifeLeft);
      }
    }
    if(choice === "Venus") {
      let lifeLeft = ((Math.floor(this.lifeExpectancy/.62)) - this.venus);
      if(lifeLeft < 0) {
        return("You're older than the average life expectancy!");
      } else {
        return(lifeLeft);
      }
    }
    if(choice === "Mars") {
      let lifeLeft = ((Math.floor(this.lifeExpectancy/1.88)) - this.mars);
      if(lifeLeft < 0) {
        return("You're older than the average life expectancy!");
      } else {
        return(lifeLeft);
      }
    }
    if(choice === "Jupiter") {
      let lifeLeft = ((Math.floor(this.lifeExpectancy/11.86)) - this.jupiter);
      if(lifeLeft < 0) {
        return("You're older than the average life expectancy!");
      } else {
        return(lifeLeft);
      }
    }
  }
}
