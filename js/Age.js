export class Age {
  consructor() {

  }
  secondConverter(date) {
    const today = new Date();
    let todaysSeconds = today.getTime();
    let datesSeconds = date.getTime();
    let totalSeconds = (todaysSeconds - datesSeconds)/1000;
    return (totalSeconds);
  }
  ageChecker(date) {
    const seconds = this.secondConverter(date);
    const years = seconds / 3.154e+7;
    return (years);
  }
  mercuryConverter(date) {
    const mercury = this.ageChecker(date)/.24;
    return(mercury);
  }
  venusConverter(date) {
    const venus = this.ageChecker(date)/.62;
    return(venus);
  }
  marsConverter(date) {
    const mars = this.ageChecker(date)/1.88;
    return(mars);
  }
  jupiterConverter(date) {
    const jupiter = this.ageChecker(date)/11.86;
    return(jupiter);
  }
}
