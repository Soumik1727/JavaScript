// Same as array in C or other programming language 
// Only main difference is , array in JS can take different daya type

let arr = ['Soumik','Mondal',20,30];
console.log(arr);

let res6 = arr.join('-');
console.log(res6);

let res7 = arr.concat(['Subho','Sovan'])
console.log(res7);

console.log(arr.indexOf(20));
console.log(arr.push('Me'));
console.log(arr.pop());

console.log(arr.includes('Soumik'));

/*
    let age = 20;
    console.log(age == 20);    OP:  true
    console.log(age == '20');    OP:  true     // JS is converting string into a number 
                                                // and then comparing.

    console.log(age === 20);    OP:  true
    console.log(age === '20');    OP:  false  // strict comparision

*/

let score = '100';
score = Number(score);
console.log(score+1);

console.log(typeof score);