export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.timer = 30;
    // foodLvl=10;
  }
  //
  // setWatch() {
  //   setInterval(() => {
  //     this.timer--;
  //   }, 1000);
  // }

  setWatch(powerSwitch=true){
    let watch = setInterval (() => {
      if (this.timer === 0 || !powerSwitch)
      {
        clearInterval (this.watch);
        this.timer = 30;
        return;
      }
      else
      {
        this.timer--;
      }
    }, 1000);
  }

  feedTommy() {
    this.timer +=5;
  }
};
