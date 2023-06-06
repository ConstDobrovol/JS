const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);
console.log(arr2);

const birthYears = [1985, 1990, 2000, 1976];
const currentYear = new Date().getFullYear();
const ages = birthYears.map(year => currentYear - year);
console.log(ages);

const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
];
const fullAge = persons.filter(person => person.age >= 18);
console.log(fullAge);
