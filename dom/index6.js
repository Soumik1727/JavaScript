// Adding class name to each attributes within Article

const article = document.querySelector('article');
console.log(article.children);

        // Converting a collection to an Array
// console.log(Array.from(article.children));

Array.from(article.children).forEach( child =>{
    child.classList.add('article-element');
});

const title = document.querySelector('h2');
console.log(title.parentElement);