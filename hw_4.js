// Задача 1
function calculateSumFrom0ToN() {
   const userInputNumber = +prompt('Calculate the sum of numbers from 0 to n. Enter n:');
   let resultTask1 = userInputNumber * (userInputNumber + 1) / 2;
   console.log(`Сумма чисел от 0 до ${userInputNumber} = ${resultTask1} `);
}

calculateSumFrom0ToN()

// Задача 2

function calculateOverpayments(amount) {
   const percentPerYear = 17
   const terms = 60
   const percentPerMonth = percentPerYear / 12 / 100

   const monthlyPayment = amount * (percentPerMonth + (percentPerMonth / ((1 + percentPerMonth) ** 60 - 1)))
   const totalPayment = monthlyPayment * terms
   const overpayments = Math.floor(totalPayment - amount)


   console.log(`В результате переплата составит: ${overpayments}`);
   return overpayments

}

calculateOverpayments(10000)


// Задача 3
function trimString(string, from, to) {

   const result = string.slice(from, to);
   console.log(result);
   return result
}

trimString(' Привет, красотка!', 1, 7)


// Задача 4
function getSumNumbers() {
   let userNumber = +prompt('Enter any number');
   let sumNumbers = 0;


   while (userNumber) {
      sumNumbers += userNumber % 10; //Привет! почему, когда я это срока шла после userNumber = Math.floor(userNumber / 10);, функция работала некорректно?
      userNumber = Math.floor(userNumber / 10);
   }
   console.log(sumNumbers);
}
getSumNumbers()

// Задача 5
function getSum() {
   let a = Math.floor(+prompt('Enter a'));
   let b = Math.floor(+prompt('Enter b'));

   let result = 0
   if (b < a) b = [a, a = b][0];
   for (let i = a; i <= b; i++) {
      result += i;
   }
   console.log(`getSum(${a},${b}) == ${result}`);
   return result
}

getSum()


// Задача 6
function fooBoo(boolean, callback1, callback2) {
   if (boolean === true) {
      foo()
   } else {
      boo()
   }
}
function foo() {
   console.log(foo.name);
}
function boo() {
   console.log(boo.name);
}

fooBoo(false, foo, boo)