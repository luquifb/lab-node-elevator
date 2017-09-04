/*jshint esversion: 6 */

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = "up";
    this.interval = "";
    this.passengers = [];
    this.waitingList = 0;
  }

  start() {
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
   }

  stop() {
    setTimeout(this.interval);
   }

  update() {
    this._passengersEnter();
    this._passengersLeave();
    this.moveElevator(this.direction);
    this.log();
   }

  _passengersEnter() {
    if(this.waitingList.length > 0 ) {
      this.waitingList.forEach((e, index) => {
       if(element.originFloor == this.floor){
         this.passengers.push(e);
         console.log(`${e.name} has enter the elevator`);
         this.waitingList.splice(index, 1);
       }
     });
    }
  }

  _passengersLeave() {
     if(this.passengers.length > 0 ){
      this.passengers.forEach((e, index) => {
       if(element.destinationFloor == this.floor){
         this.passengers.splice(index, 1);
         console.log(`${e.name} has left the elevator`);
       }
     });
    }
   }

  floorUp() {
    if(this.floor < this.MAXFLOOR  || this.waitingList.length > 0 || this.passengers.length > 0){
      this.floor++;
      console.log(this.floor);
    }
  }

  floorDown() {
    if(this.floor > 0 || this.waitingList.length > 0 || this.passengers.length > 0) {
    this.floor--;
    console.log(this.floor);

     }
   }

  call(Person) {
    this.requests.push(Person.originFloor, Person.destinationFloor);
    this.waitingList.push(Person);

    console.log(`${Person.name} has call the elevator`);
  }

  log() {
    console.log(`Direction : ${this.direction} | Passengers: ${this.passengers.join(", ")} | Waiting List:  ${this.waitingList.join(", ")} | Floor: ${this.floor}`);
   }

}

module.exports = Elevator;
