export class Course {
  constructor({name, classes = []}) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}