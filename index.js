// object 

// let person = new Object();
// person.name = "John";
// person.age = 30;
// person.greet = function() {
//     console.log("Hello!");
// };

// console.log(person);

///////////////////


// let proto = {
//   greet: function() {
//       console.log("Hello!");
//   }
// };

// let person = Object.create(proto);
// person.name = "John";
// person.age = 30;

///////////////////////////

// class Person {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//   }

//   greet() {
//       console.log("Hello!");
//   }
// }

// let john = new Person("John", 30);



////////////////////////

// function person() {
//   return {
//       name: "John",
//       age: 30,
//       greet: function() {
//           console.log("Hello!");
//       }
//   };
// }

// let john = person();

// ////// method va key-value qo'shish

// let newPerson = person();

// newPerson.job = "Developer";

// newPerson.sayGoodbye = function() {
// console.log("Goodbye!");
// };

// newPerson.sayGoodbye(); 
// console.log(newPerson); 


////////////////////////////////

// let person = (function() {
//   let instance;

//   function createInstance() {
//       return {
//           name: "John",
//           age: 30,
//           greet: function() {
//               console.log("Hello!");
//           }
//       };
//   }

//   return {
//       getInstance: function() {
//           if (!instance) {
//               instance = createInstance();
//           }
//           return instance;
//       }
//   };
// })();

// let john = person.getInstance();


///////////////////////////////// array

// let str = "hello";
// let letters = Array.from(str); // ["h", "e", "l", "l", "o"]

// console.log(letters);


// // set obyekti
// let mySet = new Set([1, 2, 3]);
// let numbers = Array.from(mySet); // [1, 2, 3]

// console.log(numbers);

///////////////////////////////////

// let str = "hello";
// let letters = [...str]; 

// console.log(letters);

/////////////////////////////////

// let filledArray = new Array(2).fill(0);

// console.log(filledArray);

//////////////////////////////////

// let str = String.fromCharCode(72, 101, 108, 108, 111); // "Hello"

// console.log(str);

//////////////////////////////// 

// let maxValue = Number.MAX_VALUE; 
// let minValue = Number.MIN_VALUE; 

// console.log(minValue);