// Задача 1
const variable1 = 'true'
const variable2 = false
const variable3 = 17
const variable4 = undefined
const variable5 = null

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);


// Задача 2
let height = 15
let width = 20

if (height > width) {
   console.log(`Наибольшее число: ${height}`)
} else {
   console.log(`Наибольшее число: ${width}`)
}

// Задача 3
for (let i = 1; i <= 20; i++) {
   if (i % 3 === 0) {
      console.log(i);
   }
}


// Задача 4
let key = true
let documents = true
let pen = true
let apple = false
let orange = true

const unnecessaryItems = apple || orange
const shouldGoToWork = key && documents && pen && unnecessaryItems
console.log(shouldGoToWork);


// Задача 5
const userInput = prompt('Write any number')
if (userInput === null) {
   alert('Not a number');
} else {
   const number = +userInput;
   if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizBuz');
   } else if (number % 3 === 0) {
      console.log('Buz');
   } else if (number % 5 === 0) {
      console.log('Fiz');
   }
}


// Задача 6
const userAge = prompt('How old are you?')

if (userAge >= 18) {
   console.log('попей пивка');
} else if (16 <= userAge && userAge <= 18) {
   console.log('Можешь выкурить сигаретку, только маме не говори.');
} else {
   console.log('Пей колу');
}

// Задача 7
const userDirection = prompt('Which direction do you want to go?')

switch (userDirection) {
   case 'юг':
      console.log('на юг пойдешь счастье найдешь');
      break;
   case 'север':
      console.log('на север пойдешь много денег найдешь');
      break;
   case 'запад':
      console.log('на запад пойдешь верного друга найдешь');
      break;
   case 'восток':
      console.log('на восток пойдешь разработчиком станешь');
      break;
   default:
      alert('Try again');
}


// Задача 1*
let userName = 'пОлИнА нАбЕрЕжНаЯ';
let userNameLowerCase = userName.toLowerCase();
let result = '';
for (let i = 0; i < userNameLowerCase.length; i++) {
   if (i === 0 || userNameLowerCase[i - 1] === ' ') {
      result += userNameLowerCase[i].toUpperCase();
   } else {
      result += userNameLowerCase[i];
   }
}
alert(`Привет, ${result}!`);


// Задача 2*
const userNumber = +prompt('Enter any number')
const userSubtract = +prompt('How much should be subtracted from the number?')
const userSum = +prompt('How much should be added to the number?')
const userMult = +prompt('How much should the number be multiplied by?')
const userDiv = +prompt('How many times should the number be divided?')

console.log((userNumber - userSubtract + userSum) * userMult / userDiv);


// Задача 3*
let resultTask3 = '#';
console.log(resultTask3);
for (let i = 0; i <= 4; i++) {
   resultTask3 += '#';
   console.log(resultTask3);
}