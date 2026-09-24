//С ниже приведенным объектом решить следующие задачи:
//1. Создать строку из названий предметов написанных через запятую
//2. Подсчитать общее количество студентов и учителей на всех предметах
//3. Получить среднее количество студентов на всех предметах
//4. Создать массив из объектов предметов
//5. Получить массив из предметов и отсортировать по количеству преподавателей на
//факультете от большего к меньшему

const subjects = {
   mathematics: {
      students: 200,
      teachers: 6
   },
   biology: {
      students: 120,
      teachers: 6
   },
   geography: {
      students: 60,
      teachers: 2
   },
   chemistry: {
      students: 100,
      teachers: 3
   }
}


//1
console.log(Object.keys(subjects).join(', '));

//2
//Вариант-1
const subjectsArr = Object.entries(subjects);

const totalAmountOfStudentsAndTeachers = subjectsArr.reduce((acc, [key, value]) => {
   return acc + value.students + value.teachers;
}, 0);
console.log(`Общее количество студентов и учителей на всех предметах: ${totalAmountOfStudentsAndTeachers}`);

//Вариант-2
let totalAmount = 0;
for (const key in subjects) {

   const amountOfStudentsAndTeachers = subjects[key]

   for (const key in amountOfStudentsAndTeachers) {
      totalAmount += amountOfStudentsAndTeachers[key]
   }
}
console.log(`Общее количество студентов и учителей на всех предметах: ${totalAmount}`)

//3
//Вариант-1
const totalAmountOfStudents = subjectsArr.reduce((acc, [key, value]) => {
   return acc + value.students;
}, 0);

console.log(`Среднее количество студентов на всех предметах: ${totalAmountOfStudents / subjectsArr.length}`);

//Вариант-2
console.log(`Среднее количество студентов на всех предметах: ${(subjects.mathematics.students + subjects.biology.students + subjects.chemistry.students + subjects.geography.students) / Object.keys(subjects).length}`)


//4
//либо так, как было const subjectsArr = Object.entries(subjects);, либо так

console.log(Object.values(subjects));

//5
console.log(subjectsArr.sort((prev, next) => next[1].teachers - prev[1].teachers));