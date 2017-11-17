export class Age {
  consructor() {
    this.secondsPerDay = 86400;
    this.secondsPerMonth = 2.628e+6;
    this.secondsPerYear = 3.154e+7;
  }
  ageChecker(date) {
    const today = new Date();
    let todaysSeconds = today.getTime();
    let datesSeconds = date.getTime();
    let totalSeconds = (todaysSeconds - datesSeconds)/1000;
    return(totalSeconds);
  }
}
