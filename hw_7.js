// Задача 1
//const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

//fibonacci.forEach(function (value) {
//   console.log(value);
//}
//)

//fibonacci.forEach((value) => {
//   console.log(value);
//});


// Задача 2
//const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

//let result = users.map(function (value, index) {
//   return `member ${index + 1}: ${value}`
//});
//console.log(result);

//let result2 = users.map((value, index) => `member ${index + 1}: ${value}`
//);

//console.log(result2);


// Задача 3
//const numbers = [7, -4, 32, -90, 54, 32, -21]

//let resultTask3_1 = numbers.filter(function (num) {
//   if (num >= 0) {
//      return true
//   }
//});
//console.log(resultTask3_1);

//let resultTask3_2 = numbers.filter((num) => num >= 0);
//console.log(resultTask3_2);


// Задача 4
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

let resultTask4_1 = fibonacci.reduce(function (sum, value) {
   return sum + value;
}, 0);
console.log(resultTask4_1);

let resultTask4_2 = fibonacci.reduce((sum, value) => sum + value);
console.log(resultTask4_2);


// Задача 5
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

let resultTask5_1 = numbers.find(function (num) {
   if (num % 2 === 0) {
      return true
   }
});
console.log(resultTask5_1);

let resultTask5_2 = numbers.find((num) => num % 2 === 0);
console.log(resultTask5_2);


// Задача 1*

function Student(salary, rate, name) {
   this.salary = salary;
   this.rate = rate;
   this.name = name;

   this.sumOfCredit = function () {
      if (rate === 'A') {
         return salary * 12
      } else if (rate === 'B') {
         return salary * 9
      } else if (rate === 'C') {
         return salary * 6
      } else if (rate === 'D') {
         return salary * 0
      }
   };
}

const student1 = new Student(2000, 'A', 'Victor');
const student2 = new Student(1500, 'C', 'Tatyana');
const student3 = new Student(3000, 'B', 'Andrey');
const student4 = new Student(500, 'D', 'Marya');
const student5 = new Student(2348, 'A', 'Arina');

const students = [student1, student2, student3, student4, student5]

let totalSumOfCredit = students.reduce((sum, student) => sum + student.sumOfCredit(), 0);

console.log(student1.sumOfCredit());
console.log(student2.sumOfCredit());
console.log(student3.sumOfCredit());
console.log(student4.sumOfCredit());
console.log(student5.sumOfCredit());

console.log(totalSumOfCredit);


// Задача 2*
const vowels = ['a', 'e', 'i', 'o']

let protectionFromTrolls = (string) => {
   const arr = string.split('');
   let arrNew = arr.filter((elem) => !vowels.includes(elem.toLowerCase()));
   const res = arrNew.join('');
   return res
}

console.log(protectionFromTrolls('This website is for losers LOL!'));

// Задача 3*
//let formattedStr = (str) => {
//   const arr = str.split('');
//   const arrRes = arr.map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index));
//   return arrRes.join('-')
//}

//console.log(formattedStr('RqaEzty'));

// Задача 4*
//let highAndLow = (str) => {
//   const arr = str.split(' ');
//   return `${Math.max(...arr)} ${Math.min(...arr)}`
//}

//console.log(highAndLow('1 9 3 4 -5'));

// Задача 5*
let checkIsogram = (str) => {
   const strLowerCase = str.toLowerCase()
   const arr = strLowerCase.split('');
   const checkResult = arr.some((char, index) => strLowerCase.indexOf(char) !== index);
   if (checkResult === true) {
      console.log(`${str} is not Isogram`);
   } else {
      console.log(`${str} is Isogram`);
   }
};

checkIsogram('miumiu')

// Задача 7*
let changeStr = (str) => {
   const strLowerCase = str.toLowerCase()
   const arr = strLowerCase.split('');
   const arrRes = arr.reduce((acc, char, index) => {
      if (strLowerCase.indexOf(char) !== strLowerCase.lastIndexOf(char)) {
         return acc += ')';
      } else {
         return acc += '(';
      }
   }, '');
   return arrRes
};

console.log(changeStr('recede'));
