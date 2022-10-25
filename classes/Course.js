export class Course {
  constructor({name, classes = []}) {
    this.name = name;
    this.classes = classes;
  }
}