const cars = ['bmw', 'mers', 'bugatti', 'lambo'];

cars[0] = 'chevrolet';

cars.push('lada');
cars.push('ferrari', 'audi');

cars.pop();
cars.pop();

cars.unshift('tesla', 'ford');

cars.shift();

console.log(cars);

const me = ['L', 'I', 'M', 'O', 'K'];

// console.log(me.reverse().join());

console.log(me.reverse());
console.log(me.join());

const animals = ['bear', 'horse', 'monkey', 'dog', 'cat'];

console.log(animals.slice(1, 4));
console.log(animals.slice(2));

const itMushuk = animals.slice(3);
console.log(itMushuk);

animals.splice(2, 1, 'bird');
animals.splice(3, 2);
console.log(animals);

const ages = [19, 70, 39, 42, 66, 8];
console.log(ages.sort());

const players = [
  ['messi', 'ronaldo', 'mbappe'],
  ['de bruyne', 'pogba', 'kross'],
  ['virgil', 'ramos', 'nesta'],
  ['alisson', 'ederson', 'oblak', ['courtoius', 'de gea']],
  ['klopp', 'guardiolla', 'anchelotti']
];

// console.log(players);
console.log(players[0][1]);
console.log(players[1][0]);
console.log(players[2][0]);
console.log(players[3][2]);
console.log(players[4][0]);
