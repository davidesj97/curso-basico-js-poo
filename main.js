import { Student } from './classes/Student';
import { LearningPath } from './classes/LearningPath';
import { Course } from './classes/Course';

const cursoBasicoJS = new Course({
  name: "Curso Básico de JavaScript",
})

const cursoCompBasica = new Course({
  name: "Curso de Computación Básica",
})

const cursoPracticoJS = new Course({
  name: "Curso Práctico de JavaScript",
})

const JavaScript = new LearningPath({
  name: "JavaScript a Profundidad",
  courses: [
    cursoBasicoJS,
    cursoPracticoJS,
    "Taller Práctico de JavaScript: Matemáticas y Estadística Básica",
    "Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!",
    "Curso de Closures y Scope en JavaScript",
    "Curso de ECMAScript: Historia y Versiones de JavaScript",
  ]
})

const GameDeveloper = new LearningPath({
  name: "Game Developer",
  courses: [
    cursoCompBasica,
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