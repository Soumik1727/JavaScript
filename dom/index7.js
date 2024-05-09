// const button = document.querySelector('button');

// button.addEventListener('click',()=>{
//     console.log('You clicked me!');
// });
const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    // ul.innerHTML += '<li>New item<\li>';     // Another way to add new item
    // const li = document.querySelector('li');
    const li = document.createElement('li');
    li.textContent = 'new item';
    ul.append(li);
    // ul.prepend(li);
});


// const items = document.querySelectorAll('li');

// items.forEach(item=>{
//     item.addEventListener('click',(event)=>{
//         // console.log('You clicked.');
//         // console.log(event);
//         console.log(event.target.innerText);

//         // event.target.style.background = 'red';
//         event.target.remove();
        
//     });
// });

ul.addEventListener('click',(e) =>{
    // console.log(e.target)
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});

