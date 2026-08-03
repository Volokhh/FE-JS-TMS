// Задача 1

//const student = {
//   name: 'Pavel',
//   course: 3,
//}
//console.log(student);

//delete student.name;
//delete student.course;
//console.log(student);

// Задача 2
//const student = {
//   name: 'Vova',
//   course: 1,
//}
//console.log(student.hasOwnProperty('name'));


// Задача 3
const student = {
   name: 'John',
   age: 19,
   isHappy: true
}

for (const key in student) {
   console.log(key);
}
for (const key in student) {
   console.log(student[key]);
}


// Задача 4
const colors = {
   'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
   },
}
console.log(colors["ru pum pu ru rum"]?.red);
console.log(colors["ru pum pu ru rum"]?.blue);


// Задача 5
let salaries = {
   andrey: 500,
   sveta: 413,
   anton: 987,
   igor: 664,
   alexandra: 199
}

let sumOfSalaries = 0
let numberOfEmployees = 0

for (const key in salaries) {
   sumOfSalaries += salaries[key];
   numberOfEmployees++;
}
console.log(`Средняя зарплата = ${sumOfSalaries / numberOfEmployees}`);


// Задача 6
let userLogin = prompt('Create a login');
let userLoginLowerCase = userLogin.trim().toLowerCase();

let userPassword = prompt('Come up with an original password');
let userPasswordTrim = userPassword.trim();

let user = {
   login: userLoginLowerCase,
   password: userPasswordTrim,
}

let userValidateLogin = prompt('To continue, enter your login');
let userValidateLoginLowerCase = userValidateLogin.trim().toLowerCase();

let userValidatePassword = prompt('To continue, enter your password');
let userValidatePasswordTrim = userValidatePassword.trim();


if (user.login === userValidateLoginLowerCase && user.password === userValidatePasswordTrim) {
   alert('Welcome!');
} else {
   alert('Incorrect login or password((');
}
