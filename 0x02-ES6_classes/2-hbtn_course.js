// A course, getters and attributes, creating class Holberton Course
export default class HolbertonCourse {
  // Now to create the constructor
  constructor(name, length, students) {
    this._checkType(name, 'string', 'Name');
    this._checkType(length, 'number', 'Length');
    this._checkType(students, 'array', 'Students');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Now get the name
  get name() {
    return this._name;
  }

  set name(name) {
    this._checkType(name, 'string', 'Name');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._checkType(length, 'number', 'Length');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._checkType(students, 'array', 'Students');
    students.forEach((student) => this._checkType(student, 'string', 'Students'));
    this._studenst = students;
  }

  /* eslint-disable-next-line class-methods-use-this */
  _checkType(val, type, variableName, errMessageParam) {
    let errMessage = errMessageParam;
    if (!errMessage) {
      switch (type) {
        case 'string':
          errMessage = `${variableName} must be a string`;
          break;
        case 'number':
          errMessage = `${variableName} must be a number`;
          break;
        case 'array':
          errMessage = `${variableName} must be an array of strings`;
          break;
        default:
          errMessage = 'Invalid type';
      }
    }

    if (type === 'array') {
      if (!Array.isArray(val) || !val.every((item) => typeof item === 'string')) {
        throw new TypeError(errMessage);
      }
      /* eslint-disable-next-line valid-typeof */
    } else if (typeof val !== type) {
      throw new TypeError(errMessage);
    }
  }
}
