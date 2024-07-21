import { Car } from "./js/Car.js";

const audi = new Car('Audi', '80', 'Purple', '68l', '7.9l/100km',);

console.log(audi.startEngine());
console.log(audi.startDriving());
console.log(audi.drive());
console.log(audi.startDriving());
console.log(audi.fuelLevel());
console.log(audi.turnOffEngine());
console.log(audi.stop());
console.log(audi.addFuel());