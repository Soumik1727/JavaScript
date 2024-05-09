//         // Function Declaration
// function speak(){                               // if we call the function before declaring
//     console.log('Hi,I am Soumik');                 //error will occur
// }

// speak();
//         //Function expression
// const bark = function(){                        // if we call the function before declaring
//     console.log("The dog is barking");          //error will occur   //
//     for(let i=0;i<10;i++){
//         speak();
//     }
// };
// bark();

/* function greet(name){
    console.log(`Good morning ${name}!`);
}
greet('Soumik');
*/
// Arrow function

const calMath = (radius) => {
    return 3.142 * radius**2 ;
};

// const calMath = radius => 3.142 * radius**2 ;

console.log('Radius is: '+calMath(5));


const greet = () => 'Hello World';
console.log(greet());


const bill = (products,tax) =>{
    let total = 0;
    for(let i = 0 ; i < products.length ; i++){
        total = total + products[i] + products[i] * tax;
    }
    return total;
};

const total = bill([10,15,30],0.2);
console.log("Total Bill: "+total);