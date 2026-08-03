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
   let result = '';
   for (let i = from; i < to; i++) {
      result += string[i];

   }
   console.log(result);
   return result
}

trimString(' Привет, красотка!', 1, 7)


// Задача 4
function getSumNumbers() {
   let userNumber = +prompt('Enter any number');
   let sumNumbers = 0;


   while (userNumber) {
      sumNumbers += userNumber % 10;
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


// Задача 1*
function isTrianglePossible() {
   const aTask1 = Math.floor(+prompt('Enter the length of side a'));
   const bTask1 = Math.floor(+prompt('Enter the length of side b'));
   const cTask1 = Math.floor(+prompt('Enter the length of side c'));

   if (aTask1 + bTask1 > cTask1 && aTask1 + cTask1 > bTask1 && bTask1 + cTask1 > aTask1) {
      console.log('true');
      return true

   } else {
      console.log('false');
      return false
   }
}

isTrianglePossible()


// Задача 3*
function calculateTaxes(priceWithoutTax) {
   const taxRate = 13
   return priceWithoutTax + priceWithoutTax * (taxRate / 100);
}
function formattingPrice(priceWithTax) {
   return priceWithTax.toLocaleString('en-US') + '.00';
}

function calculatePhonePrice() {
   const phonePrice = 800
   const accessoryPrice = 100
   const priceWithoutTaxPerPhone = phonePrice + accessoryPrice;
   const priceWithTaxPerPhone = calculateTaxes(phonePrice + accessoryPrice);


   let balance = +prompt('Enter your bank account balance');
   let phoneCount = 0;
   let totalPayments = 0;

   while (balance >= priceWithTaxPerPhone) {
      totalPayments += priceWithTaxPerPhone;
      balance -= priceWithTaxPerPhone;
      phoneCount++;
   }

   const formattedPrice = formattingPrice(totalPayments);

   console.log(`Сумма покупки ${phoneCount} телефонов c учетом налогов равняется ${formattedPrice}`);

}

calculatePhonePrice()
