
const calculate = (a, b, operation) => {
    return operation(a, b);
}
// const callMe = (num1, num2) => num1 + num2;
// const ans = calculate(4, 5, callMe);

const ans = calculate(4, 5, function (num1, num2){
   return num1 + num2;
});

console.log(ans);

        // Substraction operation
const sub = ( num1, num2) => num1 - num2;
const ans2 = calculate(4, 5, sub);
console.log(ans2);

const mul = (n1,n2) =>{
    return n1* n2;
}
const myAns = calculate(3,7, mul);
console.log(myAns);


////////////////ANOTHER BASIC EXAMPLE OF CALLBACK FUNCTION///////////////////////

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc( function(value){
    console.log(value);
});