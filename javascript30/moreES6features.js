//rest parameter
const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num*2);
}

const result = double(1,3,4,6,2,3,10);
console.log(result);

//spread syntax (arrays)
const people = ['Petr', 'Denis', 'Evgenii'];
const members = ['mario','chun-li', ...people];
console.log(members);

//spread syntax (objects)

const person = {name: "Kostya", age: 46, job: "programmer"};
const personClone = {...person, location: 'Moscow'};
console.log(personClone);

// sets
// arrays allow duplicate values
const names = ['ryu', 'shaun', 'ryu', 'chang-li'];

const namesSet = new Set(names);
console.log(namesSet);

const uniqueNames = [...new Set(names)];
console.log(uniqueNames);

//set methods
const ages = new Set();
//chaining
ages.add(20).add(30);
//add duplicate
ages.add(20);
console.log(ages);
// delete element
ages.delete(30);
// set.size
console.log(ages, ages.size);
// has
console.log(ages.has(25), ages.has(20));
// clear all
ages.clear();
console.log(ages.size)

