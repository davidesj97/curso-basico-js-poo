class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = []
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class LearningPaths {
  constructor({
    name,
    courses
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const JavaScript = new LearningPaths({
  name: "JavaScript a Profundidad",
  courses: [
    "Curso Básico de JavaScript",
    "Curso Práctico de JavaScript",
    "Taller Práctico de JavaScript: Matemáticas y Estadística Básica",
    "Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!",
    "Curso de Closures y Scope en JavaScript",
    "Curso de ECMAScript: Historia y Versiones de JavaScript",
  ]
})

const GameDeveloper = new LearningPaths({
  name: "Game Developer",
  courses: [
    "Curso de Computación Básica",
    "Nuevo Curso Gratis de Programación Básica",
    "Curso Profesional de Git y GitHub",
    "Curso de Introducción a C#",
    "Curso de C++ Básico",
    "Curso de C# para Videojuegos",
  ]
})

const david = new Student({
  name: "David",
  username: "davidesj97",
  email: "david@platzi.com",
  learningPaths: [
    JavaScript,
    GameDeveloper
  ]
})