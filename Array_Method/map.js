
// The syntax of map() & forEach() is totally same.They why there are two different method in JS?
//      Though the syntax are same but map() method stores the values in array & we can can return it 
//      from the function.

//      By using forEach() method, we can only pick one element at atime. We can display it or don some
//      different operation but forEach method can't return anything.

                                                            // Syntax 
fruits = [ 'Apple', 'Banana', 'Guava', 'Watermelon', 'Mango'];

fruits.map( (currValue, index, array) => {      // index = index of the arrah               
    console.log( `${index}: ${currValue}`);     // Array is the main array(fruits)
});                             

// -------------------------------------------------------------------------------------

const myFruits = fruits.map( (currValue, index, array) => {                    
    return `${index}: ${currValue}`;     
});     

console.log(myFruits);
// -------------------------------------------------------------------------------------

const prices = [10 ,20 ,30 ,40 ,50 ,5];

const salesPrices = prices.map((price) => {
    return (price + ( price * 10 ) / 100);
});
console.log(salesPrices);

const products = [
    {namee: 'Alu', pricee:20},
    {namee: 'Potol', pricee:10},
    {namee: 'Kumro', pricee:60},
    {namee: 'Lau', pricee:80},
    {namee: 'Dheros', pricee:70}
];

const pricess = products.map((p) => {
    if(p.pricee > 50 ){
        return {name: p.namee, price: p.pricee/2};
    }
    else{
        return p;
    }

});
console.log(pricess);

// -------------------------------------------------------------------------------------

const words = ['sky', 'man', 'ball', 'egg', 'mouse'];

const result = words.map( (e)=> e.toUpperCase())
console.log(result);