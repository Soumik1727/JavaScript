
// push(): push element after the last index        // returns: array length
// push(): pop element from the last index          // returns: last element
// unshift(): add one / more elements at the first index        // returns: array length
// shift():  pop element from the first index          // returns: first element



const persons = ['Subho', 'Amlan', 'Sovan'];
console.log(persons.push('Tamal'));     // output: 4

console.log(persons.pop());         // output: Tamal
console.log(persons);              

//=======================================================

// splice() method: Changes the content of an array by removing or replacing existing elements
// and / or adding new elements in place;

// SYNTAX:
    // splice(startingIndex, deleteCount, addItem1, addItem2,..., addItemN);

    fruits = [ 'Apple', 'Banana', 'Guava', 'Watermelon', 'mango'];
    
    // console.log(fruits.splice(2));    // output: [ 'Guava', 'Watermelon', 'Mango' ]  // deleted items
    // fruits.splice(2,1,'orange','Grape');
    // console.log(fruits);

    // fruits = [ 'Apple', 'Banana', 'Guava', 'Watermelon', 'Mango'];
    // fruits.splice(2,2);         // Delete two element from 2 and onwards...
    // console.log(fruits);    //  output:  [ 'Apple', 'Banana', 'Mango' ]

    // fruits.splice(2,0,'Grapes', 'Orages');
    // console.log(fruits);
//==============================================================
    // Questions: I have to do 'mango' => 'Mango'

    const index = fruits.indexOf('mango');
    // fruits.splice(index,1,'Mango');
    fruits[index] = 'Mango';
    console.log(fruits);




    
