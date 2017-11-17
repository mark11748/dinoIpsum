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
    const years = Math.floor(seconds / 3.154e+7);
    return (years);
  }
}
