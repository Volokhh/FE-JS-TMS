"use strict";
const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
//1
function joinStringProperty(items, key) {
    return items.map((item) => item[key]).join(', ');
}
const userNames = joinStringProperty(users, 'name');
console.log(userNames);
//2
function sumOfCars(items, key) {
    return items.reduce((acc, item) => acc + (item[key]?.length ?? 0), 0);
}
const totalCars = sumOfCars(users, 'cars');
console.log(totalCars);
//3
function filterHasEducation(items, key) {
    return items.filter(item => item[key] === true);
}
const userHasEducation = filterHasEducation(users, 'hasEducation');
console.log(userHasEducation);
//4
function filterHasAnimals(items, key) {
    return items.filter(item => item[key]);
}
const userHasAnimals = filterHasAnimals(users, 'animals');
console.log(userHasAnimals);
//5
function getCarBrand(items, key) {
    return items.flatMap((item) => item[key] ?? []);
}
const carBrand = getCarBrand(users, 'cars');
console.log(carBrand);
