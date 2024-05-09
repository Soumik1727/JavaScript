const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerText = "I'm Soumik";
para.innerText += "I'm Soumik";   // to append
console.log(para.innerText);


const paras = document.querySelectorAll('p');
paras.forEach(para=>{
    console.log(para.innerText);
    para.innerText += ' new text';
});

//     Changing HTMl 
//     Changing HTMl 

const content = document.querySelector('.content');
// content.innerHTML = '<H2> This is new HTML</H2>';

const people = ['Soumik','Soumik2','Soumik3','Soumik4','Soumik5'];

people.forEach(person=>{
    content.innerHTML += `<p>${person}</p>`;
});
