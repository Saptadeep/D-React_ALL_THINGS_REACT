//import {c_l} from './helpers.js';
//c_l(9999);

let w = (b) => b*12;
w(2);
console.log(typeof w);
//----------------------------------

class Instrument {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Guitar extends Instrument {
  describe() {
  	console.log(`${this.name}`);
    return `I'm a ${this.name} from the ${this.type} family.`// TODO fill this line
  }
}

let fender = new Guitar("Fender", "strings");
let z =fender.describe();
console.log(z);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Prototypes:
function Vehicle(make, year) {
  this.make = make;
  this.year = year;
}

Vehicle.prototype.color; //Created a property no need to initialise 
Vehicle.prototype.bio = function(){

    return `A ${this.color} Tesla made in ${this.year}.`;
}

let s = new Vehicle("Tesla", 2017);
s.color = "black";
s.bio();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SET:
s = new Set()
s.add(5);
s.add(5);
console.log(s.size);
