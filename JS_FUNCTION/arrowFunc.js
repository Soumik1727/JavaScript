
        // Regular function
        // Regular function
const calcArea = function(radius){
    return 3.142 * radius**2;
}

const area = calcArea(5);
console.log("By Regular Function",area);
        // Arrow Function
        // Arrow Function
const calcArea2 = (radius) => {
    return 3.142 * radius**2;
};
const area2 = calcArea2(5);
console.log("By Arrow Function",area2);


const calcArea3 = radius => 3.142 * radius**2;    // modern version of arrow function

        // Example of regular function
        // Example of regular function
const bill = function(products, tax){
    let total = 0;
    for( let i = 0; i < products.length; i++){
        total = total + products[i] + (products[i]* tax);
    }
    return total;
} 
console.log(bill([10,20,30,40,50], 0.5));
        // Arrow function of the above function
        // Arrow function of the above function

const bill2 = (products, tax) => {              // I can't reduce to much size of the function as , inside the 
    let total = 0;                              // function there are normal programming logic...
    for( let i = 0; i < products.length; i++){
        total = total + products[i] + (products[i]* tax);
    }
    return total;
};       
console.log(bill2([10,20,30,40,50], 0.5));


