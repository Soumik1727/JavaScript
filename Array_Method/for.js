fruits = [ 'Apple', 'Banana', 'Guava', 'Watermelon', 'Mango'];

console.log("==========FOR IN LOOP==========");
for( let item in fruits){                       
    // console.log(item);// output: 0,1,2,3,4
    console.log(fruits[item]);// output: Apple Banana Guava Watermelon Mango
}
console.log("==========FOR OF LOOP==========");
for( let item of fruits){                       // for in loop
    console.log(item);// output: Apple Banana Guava Watermelon Mango
}