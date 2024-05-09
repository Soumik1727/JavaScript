const myFunc = (callBackFunc) =>{
    let value = 50;
    callBackFunc( value );
};

myFunc(function(value){
    console.log(value);
});

let people = ['Soumik1','Soumik2','Soumik3','Soumik4','Soumik5'];

people.forEach(function(person,index){
    console.log(index,person);
});

/* Arrow function of the above function

people.forEach( person => {
    console.log(person);
});
   */