// Class task-1
// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         this.technologies=[];
//         this.status = "Junior";
//     }

// setTechnologies(technologies) {
//     this.technologies=[ ...this.technologies,...technologies,]
// }
// setNewStatus(newStatus){
//     this.status = newStatus;
// }
// }
// const student = new Student("Maxim", 20);
// student.setTechnologies(["HTML", "CSS", "JavaScript"]);
// student.setNewStatus("Middle");
// console.log(student);



//Class task 2
// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	compareAge(newPerson) {
// 		if (this.age > newPerson.age) {
// 			alert(`${this.name} older than ${newPerson.name}`);
// 		} else if (this.age < newPerson.age) {
// 			alert(`${this.name} younger than  ${newPerson.name}`);
// 		}
// 	}
// }

// const person1 = new Person('Maxim', 24);
// const person2 = new Person('Svetlana', 36);
// const person3 = new Person('Irina', 23);

// person1.compareAge(person2); 
// person2.compareAge(person3); 
// person3.compareAge(person1); 






//Class task 3
// class CarService {
//     static DefaultWorkingHours = {
//       from: "9:00",
//       till: "20:00",
//     };
  
//     constructor(name, workingHours = CarService.DefaultWorkingHours) {
//       this.name = name;
//       this.workingHours = workingHours;
//     }

//     repairCar(carName) {
//       if (!carName) {
//         console.error("You need to specify the name of the car in order to repair it");
//         return;
//       }
  
//       const currentHour = new Date().getHours();
//       const fromHour = Number(this.workingHours.from.split(":")[0]);
//       const tillHour = Number(this.workingHours.till.split(":")[0]);
  
//       if (currentHour < fromHour || currentHour >= tillHour) {
//         console.log("Unfortunately, we are closed now. Come back tomorrow.");
//       } else {
//         console.log(`Now we will repair your car ${carName}! Please wait.`);
//       }
//     }
// }
  
//   const carService = new CarService("RepairCarNow", { from: "8:00", till: "20:00" });
//   carService.repairCar("BMW");



//Class task 4
// class Dictionary {
//     constructor(name) {
//       this.name = name;
//       this.words = {};
//     }
  
//     add(word, description) {
//       if (!(word in this.words)) {
//         this.words[word] = { word, description };
//       }
//     }
  
//     remove(key) {
//       delete this.words[key];
//     }
  
//     get(key) {
//       return this.words[key];
//     }
  
//     showAllWords() {
//       for (let key in this.words) {
//         console.log(`${this.words[key].word} - ${this.words[key].description}`);
//       }
//     }
//   }

// const dictionary = new Dictionary("Explanatory Dictionary");
// dictionary.add("JavaScript", "popular programming language");
// dictionary.add("Web developer", "A person who creates new services and sites or maintains and supplements existing ones");
// // dictionary.get("Javascript")
// dictionary.remove("JavaScript");
// dictionary.showAllWords();




//Class task 5
// class Dictionary {
//         constructor(name) {
//           this.name = name;
//           this.words = {};
//         }
      
//         add(word, description) {
//           if (!(word in this.words)) {
//             this.words[word] = { word, description };
//           }
//         }
      
//         remove(key) {
//           delete this.words[key];
//         }
      
//         get(key) {
//           return this.words[key];
//         }
      
//         showAllWords() {
//           for (let key in this.words) {
//             console.log(`${this.words[key].word} - ${this.words[key].description}`);
//           }
//         }
//       }
// class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//       super(name);
//     }
  
//     add(word, description) {
//       const wordObj = {
//         word: word,
//         description: description,
//         isDifficult: true
//       };
  
//       if (!this.words[word]) {
//         this.words[word] = wordObj;
//       }
//     }
//   }

//   const hardWordsDictionary = new HardWordsDictionary("Hard words");
// hardWordsDictionary.add(
//   "amateur",
//   "One who practices science or art without special training, having only a superficial knowledge."
// );
// hardWordsDictionary.add(
//   "neologism",
//   "A new word or expression, as well as the new meaning of the old word."
// );
// hardWordsDictionary.add(
//   "quantum",
//   "The indivisible part of some quantity in physics."
// );

// hardWordsDictionary.remove("neologism");
// hardWordsDictionary.showAllWords();





//Class task 6
// class Dictionary {
//     #name;
//     #words;
  
//     constructor(name) {
//       this.#name = name;
//       this.#words = {};
//     }
  
//     get mainName() {
//       return this.#name;
//     }
  
//     set setMainName(newName) {
//       this.#name = newName;
//     }
  
//     get allWords() {
//       return this.#words;
//     }
  
//     addNewWord(word, description) {
//       this.#words[word] = description;
//     }
  
//     remove(word) {
//       delete this.#words[word];
//     }
  
//     showAllWords() {
//       console.log(this.#words);
//     }
//   }
  
//   class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//       super(name);
//     }
  
//     add(word, description) {
//       const isHard = word.length >= 10;
//       if (isHard) {
//         this.addNewWord(word, description);
//       }
//     }
//   }
  
//   const hardWordsDictionary = new HardWordsDictionary("Difficult words");
//   hardWordsDictionary.add("amateur", "One who practices science or art without special training, having only a superficial knowledge.");
//   hardWordsDictionary.add("neologism", "A new word or expression, as well as the new meaning of the old word.");
//   hardWordsDictionary.add("quantum", "The indivisible part of some quantity in physics.");
  
//   hardWordsDictionary.remove("neologism");
//   hardWordsDictionary.showAllWords();
  
//   console.log(hardWordsDictionary.mainName);
//   hardWordsDictionary.setMainName = "New Dictionary";
//   console.log(hardWordsDictionary.mainName); 
//   console.log(hardWordsDictionary.allWords); 
  



//Class task 7
// class Developer {
//     constructor(fullName, age, position = 'Developer') {
//       this.fullName = fullName;
//       this.age = age;
//       this.position = position;
//       this.technologies = [];
//     }
  
//     code() {}
  
//     learnNewTechnology(technology) {
//       this.technologies.push(technology);
//     }
//   }
  
//   class JuniorDeveloper extends Developer {
//     constructor(fullName, age) {
//       super(fullName, age, 'Junior');
//       this.technologies = ['HTML', 'CSS', 'JavaScript'];
//     }
  
//     code() {
//       console.log('Junior developer is writing code...');
//     }
//   }
  
//   class MiddleDeveloper extends Developer {
//     constructor(fullName, age) {
//       super(fullName, age, 'Middle');
//       this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
//     }
  
//     code() {
//       console.log('Middle developer is writing code...');
//     }
//   }
  
//   class SeniorDeveloper extends Developer {
//     constructor(fullName, age) {
//       super(fullName, age, 'Senior');
//       this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
//     }
  
//     code() {
//       console.log('Senior developer is writing code...');
//     }
//   }
  
//   const juniorDeveloper = new JuniorDeveloper('Anastasia', 20);
//   const middleDeveloper = new MiddleDeveloper('Igor', 25);
//   const seniorDeveloper = new SeniorDeveloper('Maxim', 30);
  
//   juniorDeveloper.code(); // Junior developer writes code...
//   middleDeveloper.code(); // Middle developer writes code...
//   seniorDeveloper.code(); // Senior developer writes code...
  
//   console.log(`${juniorDeveloper.fullName},${juniorDeveloper.age},${juniorDeveloper.position}`); // "Anastasia", 20, "Junior"
//   console.log(`${middleDeveloper.fullName},${middleDeveloper.age},${middleDeveloper.position}`); // "Igor", 25, "Middle"
//   console.log(`${seniorDeveloper.fullName},${seniorDeveloper.age},${seniorDeveloper.position}`); // "Maxim", 30, "Senior"
  