const form = document.querySelector('.signup-form');

form.addEventListener('submit',e=>{
    e.preventDefault();
    console.log(form.username.value);
});
            // Regex101 // checking username 
const username = 'soumikmondal1727';
const pattern = /^[a-zA-Z0-9]{6,}$/;

const result = pattern.test(username);
// console.log(result);

if(result){
    console.log('The test is passed');
}
else{
    console.log('The test is failed.');
}

