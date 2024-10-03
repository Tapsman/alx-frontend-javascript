// Import 5-building

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  // Create a constructor sqf and floors
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  // Set floors
  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
