// Object in array

const obj = [
    {title: 'Think and Grow Rich',likes: 30},
    {title: 'Rich Dad Poor Dad',likes: 40},
];
console.log(obj);


// object literal
// object literal

let user = {
    name: 'Soumik',
    phone: 7450078059,
    address: 'India',
    school: ['RKVAVM','GHS(HS)','VC','JU'],

    // method in object

    login: function(){
        console.log("You are logged in!");
    },
        // This pointing to total object 
    showSchool: function(){
        console.log(this.school);
    } 
            // SAME AS THE ABOVE FUNCTION
    // showSchool(){
    //     console.log(this.school);
    // } 

};

console.log(user);

// // Two ways of access user properties// //
console.log(user.name);
console.log(user['name']);

// Update

user.address = 'Maheshtala';
console.log(user.address);
user.login();
user.showSchool();


