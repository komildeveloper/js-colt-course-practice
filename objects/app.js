const person = {
  name: 'Komil',
  age: 19,
  married: false,
  job: 'Full Stack Software Developer'
};

person.hobbies = ['football', 'driving', 'read books'];
person.loves = {
  animals: ['horse', 'eagle', 'cat'],
  fruits: {
    citrus: 'orange',
    other: 'Watermelon'
  }
};

person.name = 'Fozil';

console.log(person);
console.log(person.loves.fruits);

const empty = {};

empty[21] = 'age';
empty.name = 'Harry';

console.log(empty);

const nums = [1, 2, 3, 4];
const otherNums = [1, 2, 3, 4];

const equal = nums;

console.log(nums === otherNums);
console.log(equal === nums);
