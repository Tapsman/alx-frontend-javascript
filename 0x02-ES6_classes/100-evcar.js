// Import from 10-car.js
import Car from './10-car';

export default class EVCar extends Car {
  // Create the constructor
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
