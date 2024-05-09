
// indexOf(): indexOf() returns the first index at which the given element is found. Otherwise, it returns -1;
//  Syntax: arrayName.indexOf(searchEle, fromIndex);
// includes(): It checks the existance of a certain element in an array or not. It returns true or false;
//  Syntax: arrayName.includes(searchEle, fromIndex);

fruits = [ 'Apple', 'Banana', 'Guava', 'Watermelon', 'Mango', 'Banana', 'Guava', 'Watermelon', 'Mango', 'Banana', 'Guava',];

console.log(fruits.indexOf("Guava"));       // output: 2
console.log(fruits.lastIndexOf("Guava"));       // output: true
console.log(fruits.includes("Guava"));       // output: true

console.log(fruits.lastIndexOf("Guava", 7));    // output: 6    // AS we are searching till index 7