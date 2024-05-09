console.log(Math);
console.log(Math.PI);

const area = 7.4;

console.log(Math.round(area)); // 7
console.log(Math.floor(area)); // 7
console.log(Math.ceil(area));  // 8
console.log(Math.trunc(area)); // 7--lleave the decimal,take int only


//  Generate Random Number

const random = Math.random();
console.log(random);  // between 0 & 1

console.log(Math.round(random*100));