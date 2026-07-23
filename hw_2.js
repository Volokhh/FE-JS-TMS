// Задача 1
let x = 20
let y = 58
let z = 42

console.log(x + y + z);


// Задача 2
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const dayInYear = 365;

const myAgeInSeconds = 20 * dayInYear * hoursInDay * minutesInHour * secondsInMinute;

console.log(myAgeInSeconds);


// Задача 3
let count = 42
let userName = '42'

const countString1 = String(count)
const countString2 = '' + count

console.log(countString1, typeof countString1);
console.log(countString2, typeof countString2);


const userNameNumber1 = +userName
const userNameNumber2 = Number(userName)

console.log(userNameNumber1, typeof userNameNumber1);
console.log(userNameNumber2, typeof userNameNumber2);


// Задача 4
let a = 1
let b = 2
let c = 'белых медведей'

console.log('' + a + b + ' ' + c);

// Задача 5
const aTask5 = 'доступ'
const bTask5 = 'морпех'
const cTask5 = 'наледь'
const d = 'попрек'
const f = 'рубило'

console.log(aTask5.length + bTask5.length + cTask5.length + d.length + f.length);


// Задача 6
let logged = true
let userNumber = 7
let userSecondName = 'Pupkin'

const loggedType = (typeof logged)
const userNumberType = (typeof userNumber)
const userSecondNameType = (typeof userSecondName)


console.log(`Variable: logged have type: ${loggedType}`);
console.log(`Variable: userNumber have type: ${userNumberType}`);
console.log(`Variable: userSecondName have type: ${userSecondNameType}`);


// Задача 7
const userNamePrompt = prompt('Enter your name')
const userAgePrompt = prompt('Enter your age')

console.log('User name is', userNamePrompt);
console.log('User age is', userAgePrompt);


// Задача 1*
let aTask1 = 4
let bTask1 = 3

let cTask1 = aTask1
aTask1 = bTask1
bTask1 = cTask1

console.log('variable a =', aTask1);
console.log('variable b =', bTask1);


// Задача 2*
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

const cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);
