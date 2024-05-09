let user = {
    name : 'John',
    age : 30 ,
    email:'john@gmail.com',
    blog: ['First blog','second blog'],
    login: function(){
        console.log('The use is logged in');
    }
};

user.login();

console.log(user);

// console.log(user.age);
console.log(user['age']);

user.age = 35;
console.log(user.age);

let arr = [ 
    {title:'Soumik',likes:20},
    {title:'Soumik2',likes:30}
];

console.log(arr);