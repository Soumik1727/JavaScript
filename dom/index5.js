// const content = document.querySelector('p');
// console.log(content.classList);

// content.classList.remove('success');
// content.classList.add('error');

const paras = document.querySelectorAll('p');
paras.forEach(p=>{
    if(p.innerText.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});