
// Chaining array Method

const products = [
    {name: 'Alu', price:20},
    {name: 'Potol', price:10},
    {name: 'Kumro', price:60},
    {name: 'Lau', price:30},
    {name: 'Dheros', price:70}
];

    // At first we are filtering the products which price 
    // is more than 50 ,then displaying the product name and //price
const filteredArray = products.filter( product => product.price > 50 );
console.log(filteredArray);  // output: [ { name: 'Kumro', price: 60 }, { name: 'Dheros', price: 70 } ]

const promos = filteredArray.map( product => {
    return `The ${product.name} is ${product.price /2} rupees`;
});
console.log(promos);   // output: [ 'The Kumro is 30 rupees', 'The Dheros is 35 rupees' ]

// Short version of the above 2 method

const promo = products.filter( product => product.price > 50).map( product => `The ${product.name} is ${product.price /2} rupees.)`);
console.log(promo);
