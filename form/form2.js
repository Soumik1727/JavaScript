const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z0-9]{6,15}$/;

form.addEventListener('submit',e=>{
    e.preventDefault();
    
            // Validation
    const username = form.username.value;
    if(usernamePattern.test(username)){
        //Give good feedback
        feedback.textContent = 'valid username :)';
    } else {
        feedback.textContent = 'Username should contains only atleast 6 characters & numbers';
    }
});

// Live feedback

form.username.addEventListener('keyup',e=>{
    // console.log(e.target.value,form.username.value);

    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class','success');
    } else {
        form.username.setAttribute('class','error');
    }
});