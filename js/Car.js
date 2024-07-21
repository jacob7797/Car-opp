export class Car {
  constructor(name, model, color, tankSize, AverageFuelConsumption, fuelLeft) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.tankSize = tankSize;
    this.AverageFuelConsumption = AverageFuelConsumption;
    this.fuelLeft = fuelLeft;
    this.engineOn = false;
    this.speed = 0;
  }

  startEngine() {
    if (this.engineOn === true) {
      return `Car is already running.`;
    }
    this.engineOn = true;
    return `Engine started.`;
  }

  turnOffEngine() {
    if (this.engineOn === false) {
      return `Car is already off.`;
    }
    if (this.speed !== 0) {
      return `Car cannot turn off while driving`;
    }
    this.engineOn = false;
    return `Engine turned off.`;
  }

  startDriving() {
    if (this.engineOn === false) {
      return `Car cannot start driving without turning on.`;
    }
    if (this.speed !== 0) {
      return `Car already moving.`;
    }
    if (this.fuelLeft < 2 * this.AverageFuelConsumption) {
      return `Not enough fuel in tank to start driving.`;
    }
    this.fuelLeft = `${this.fuelLeft - 2 * this.AverageFuelConsumption}`;
    this.speed = 5;
    return `Car starts moving.`;
  }

  drive() {
    if (this.speed == 0) {
      return `Car first needs start to move.`;
    }
    if (this.fuelLeft < 1 * this.AverageFuelConsumption) {
      return `Not enough fuel.`;
    }
    this.fuelLeft = `${this.fuelLeft - 1 * this.AverageFuelConsumption}`;
    return `Driving.`;
  }

  stop() {
    this.speed = 0;
    return `Car stopped.`;
  }

  fuelLevel() {
    let fuelLeft = 10;
    return `Fuel left in tank ${fuelLeft} liters. `;
  }

  addFuel(liters) {
    if (this.speed !== 0) {
      return `Car first needs to stop before adding fuel.`;
    }
    if (this.speed == 0) return `Car stopped and now can refuel.`;

    if (this.fuelLeft === this.tankSize) {
      return `Tank is full, cannot fill more fuel.`;
    }
    if ((this.fuelLeft = this.tankSize - this.fuelLeft))
      return `Tank refueled ${this.fuelLeft.toFixed(2)} liters.`;
  }
}
