
// Stringifying and Passing data

const products = [
    {namee: 'Alu', pricee:20},
    {namee: 'Potol', pricee:10},
    {namee: 'Kumro', pricee:60},
    {namee: 'Lau', pricee:80},
    {namee: 'Dheros', pricee:70}
];

// console.log(JSON.stringify(products));


localStorage.setItem('products',JSON.stringify(products));


const stored = localStorage.getItem('products');

// console.log(stored);

// converting JSON String to a JS Array

console.log(JSON.parse(stored));