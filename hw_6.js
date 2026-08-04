// Задача 1

const colors = ['red', 'green', 'blue']

console.log(colors.length);


// Задача 2

const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length - 1]);


// Задача 3

const numbers = [5, 43, 63, 23, 90]

console.log(numbers.splice());
console.log(numbers.slice(0, 0));


// Задача 4

const students = ['Polina', 'Dasha', 'Masha']

const studentsCopy1 = students.slice(0, 2)
const studentsCopy2 = studentsCopy1.push("Borya")
const studentsCopy3 = studentsCopy1.shift()
const studentsCopy4 = studentsCopy1.unshift('Andrey')
console.log(studentsCopy1);


// Задача 5

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++) {
   console.log(cats[i]);
}

for (const cat of cats) {
   console.log(cat);
}


// Задача 6

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const unittedArr = evenNumbers.concat(oddNumbers)
console.log(unittedArr);
console.log(unittedArr.indexOf(8));


// Задача 7

const binary = [0, 0, 0, 0]

console.log(binary.join(1));


// Задача 1*

function checkPalindrome() {
   const words = ['потоп', 'потом', 'топот']

   for (let i = 0; i < words.length; i++) {

      const wordsReverse = words[i].split('').reverse().join('');
      //console.log(wordsReverse);
      if (words[i] === wordsReverse) {
         console.log(`${words[i]} is palindrome`);
      } else {
         console.log(`${words[i]} is not palindrome`);
      }
   }


   for (const word of words) {
      const wordReverse = word.split('').reverse().join('');

      if (word === wordReverse) {
         console.log(`${word} is palindrome`);
      } else {
         console.log(`${word} is not palindrome`);
      }
   }
}

checkPalindrome()


// Задача 2*

const matrix = [
   [12, 98, 78, 65, 23],
   [54, 76, 98, 43, 65],
   [13, 324, 65, 312],
   [9092, 22, 45, 90000],
]

let sumOfNumbers = 0;
let matrixLength = 0;

for (array of matrix) {

   // нужна помощь (・_・ヾ

}

console.log(sumOfNumbers / matrixLength);


// Задача 3*

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
let positiveNumbers = [];
let negativeNumbers = [];

for (num of mixedNumbers) {
   if (num > 0 || num === 0) {
      positiveNumbers[positiveNumbers.length] = num;

   } else {
      negativeNumbers[negativeNumbers.length] = num;
   }
}
console.log(positiveNumbers);
console.log(negativeNumbers);


// Задача 4*

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [];
let arrCube = [];

for (let i = 0; i < 6; i++) {
   arr.push(getRandomInt(1, 100)); // как создать массив из рандомных чисел, нашла на просторах интернета 
}

for (num of arr) {
   arrCube.push(num * num * num);
}

console.log(arr);
console.log(arrCube);
