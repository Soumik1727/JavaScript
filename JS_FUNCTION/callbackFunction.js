
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
