class Learner {
  #grades;
  #name = {
    first: '',
    last: '',
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;

    this.#grades = new Grades();
  }
  get name() {
    return this.#name.first + ' ' + this.#name.last;
  }
  get age() {
    return this.#age;
  }
  addGrades(...grades) {
    this.#grades.addGrades(grades);
  }
  get grades() {
    return this.#grades.grades;
  }
  get average() {
    return this.#grades.average;
  }
}

class Grades {
  #grades = [];

  constructor(initialGrades) {
    if (initialGrades) {
      this.addGrades(initialGrades);
    }
  }
  static getAverage(...grades) {
    const arr = [];
    this.addToArray(arr, grades);
    return this.avgArray(arr);
  }
  static addToArray(arr, grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        arr.push(grade);
      }
    });
  }
  static avgArray(gradeArray) {
    const arr = [...gradeArray];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
  addGrades(...grades) {
    Grades.addToArray(this.#grades, grades.flat());
  }
  get grades() {
    return this.#grades;
  }
  get average() {
    return Grades.avgArray(this.#grades);
  }
}

let learner1 = new Learner('Dily', 'Dilly', 13);

// learner1.addGrades(99, 88, 77, 66, 77, 88, 99);
// console.log(learner1.average);


class Animal {}
class Cat extends Animal {}
class Tabby extends Cat {}
class SpottedTabby extends Tabby {}

const cat1 = new SpottedTabby();
let object = cat1;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);


