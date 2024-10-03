// This is a class name Airpot implemented
export default class Airport {
  // create the constructor name and code
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
