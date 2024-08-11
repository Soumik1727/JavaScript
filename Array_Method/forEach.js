

// The syntax of map() & forEach() is totally same.They why there are two different method in JS?
//      Though the syntax are same but map() method stores the values in array & we can can return it 
//      from the function.

//      By using forEach() method, we can only pick one element at atime. We can display it or do some
//      different operation but forEach method can't return anything.

//=====================================================================================

fruits = [ 'Apple', 'Banana', 'Guava', 'Watermelon', 'Mango'];
                        // Arrow function
fruits.forEach( (fruit, index, array) => {      // index = index of the arrah
    console.log(` ${fruit}: ${index}`);
});       

//================================================================================

console.log("==========Traditional function==========");
fruits.forEach( function calback(fruit, index, array){      
    console.log(` ${fruit}: ${index}`);
}); 

// Same output of these two function
// Apple: 0
// Banana: 1
// Guava: 2
// Watermelon: 3
// Mango: 4
