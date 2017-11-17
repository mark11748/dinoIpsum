export class Age {
  consructor(dob) {
    this.birthdate = dob;
  }
  ageChecker() {
    const today = new Date();
    const result = today - this.birthdate
    return(result);
  }
}
