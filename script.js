const person = {
  name: {
    first: 'Elyan',
    last: 'Kemble',
  },
  age: 32,
  location: {
    city: 'Garland',
    state: 'Texas',
    zip: 75040,
  },
  occupation: 'Front-End Developer',
  introduce() {
    console.log(
      `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
    );
  },
  hello() {
    console.log(`You said hello to me`);
  },
  sayAge() {
    console.log(`Hello I am ${this.age} years old`);
  },
};
// console.log(person)
// person.introduce()
// person.hello()
// person.sayAge()

// Creating a class
// 1. class keyword
// 2. capitolized name for the class
// 3. curly Brackets

class Animal {
  //instantiate that class

  constructor(eyes, legs, isAwake, isMoving) {
    (this.eyes = eyes), //ket value pairs that make up propterties of our objects
      (this.legs = legs),
      (this.isAwake = isAwake),
      (this.isMoving = isMoving);
    // return is not needed because the new object is returned by default
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString() {
    return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? 'is' : 'is not'
    } awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}

class Cat extends Animal {
    static speak(){
        console.log('All cats Meow')
    }
  constructor(fur, eyes, legs, isAwake, isMoving) {
    super(eyes, legs, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak('Meow...');
  }
  toString() {
    return super.toString('Cat');
  }
}

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak('Woof!');
  }
  toString() {
    return super.toString('Dog');
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak('Moo.');
  }
  toString() {
    return super.toString('Cow');
  }
}
const animal = new Animal(2, 4, true, true);
const cat1 = new Cat('Orange', 2, 4, true, false);
const cat2 = new Cat('Black and White', 3, 3, false, false);
const dog1 = new Dog('Gold', true, true);
const cow1 = new Cow('Brown', true, false);

// console.log(cat1);
// console.log(cat2)
// console.log(dog1)
// console.log(cow1)
// console.log(animal)
// let cat = new Animal(2, 4, false, true); // instantiation of an object from the class
// let cat1 = new Animal(1, 3, true, false);
// let cat2 = new Animal(0, 2, false, false);
// console.log(cat)// instance of an object created by the class
// console.log(cat1)
// console.log(cat2)
// cat.speak(`Food now`)
// // Math.random() // Static Method - called on the class itself NOT an instance of the class.

// console.log(cat1.toString());

class Human extends Animal {
  constructor( // is ALL properties we will accept as arguments/parameters
    hair,
    isAwake,
    isMoving,
    age,
    occupation,
    first,
    last,
    city,
    state,
    zip
  ) {
    super(2, 2, isAwake, isMoving); // Properties we are accepting/inheriting from the parent class
    this.hair = hair;
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
    this.location = {
      city: city,
      state: state,
      zip: zip,
    };
    this.occupation = occupation;
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
    );
  }
}

let Dylan = new Human(
  'Brown-ish?',
  true,
  true,
  31,
  'Best Instructor',
  `Dylan`,
  `Comeau`,
  `Dartmouth`,
  `MA`,
  11111
);

// Dylan.introduce()

// Encapsulation

class Learner {
  #grades = [];
  #name = {
    first: '',
    last: '',
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }
  get name() {
    return this.#name.first + ' ' + this.#name.last;
  }
  get age() {
    return this.#age;
  }
  addGrades(...grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }
  get grades() {
    return this.#grades;
  }
  get average() {
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

const learner1 = new Learner('Leeroy', 'Jenkins', 18);

let me = new Learner('Dilly', 'Dilly', 30)

console.log(me.name, me.age)

me.addGrades([95, 87, 66], "98", "100", -60, 88, 89, [100, 76, 88], 105)

console.log(me.average)//wiht out knowing how its happening, we still know whats its going to do

console.log(Math.random())

class Grades {
    static getAverage(...grades) {
      const arr = [];
  
      grades = grades.flat();
      grades.forEach((grade) => {
        grade = Number(grade);
  
        if (grade >= 0 && grade <= 100) {
          arr.push(grade);
        }
      });
      
      arr.sort((a, b) => a - b).shift();
  
      return arr.reduce((a, b) => a + b) / arr.length;
    }
  }


console.log(Grades.getAverage(95, 67, [1, 2,3 ,4 ,5], "99", 99, 100, 78))


