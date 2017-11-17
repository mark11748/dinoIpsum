export class Age {
  consructor(dob) {
    this.birthdate = dob;
  }
  ageChecker(dob) {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
  }
}
