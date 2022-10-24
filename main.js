const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitico de HTML y CSS",
    "Curso Práctico de HTML y CSS"
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
}


function Student (name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
}

const Juanita = new Student("Juanita", 25, [])