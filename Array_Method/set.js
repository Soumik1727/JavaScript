
const numbers = [ 1, 2, 13 , 4, 1, 13, 18, 2];

// find set value

console.log(new Set(numbers));  // in set format
                                                // '...' => spread operator to get data in array format
console.log(...new Set(numbers));
const uniqueEle = numbers.filter( (currEle, index, arr) => {

    // console.log('Index: ',index);
    // console.log(`Index of ${currEle}: ${arr.indexOf(currEle)}\n`);

    return arr.indexOf(currEle) == index;
    
});

console.log(uniqueEle);