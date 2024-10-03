// Imeplenting a class named HolbertonClass

export default class HolbertonClass {
  // Define the constructor
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](tip) {
    if (tip === 'number') {
      return this._size;
    }

    if (tip === 'string') {
      return this._location;
    }
    return null;
  }
}
