const link = document.querySelector('a');

console.log(link);

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.facebook.com');
link.innerText = 'Facebook link';


const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class','success');
//msg.setAttribute('style','color:green;'); // this is not recommanded
            // as previously exsited property overridden
msg.innerText = 'Hello';
msg.style.color = 'orange';
msg.style.fontSize = '30px' ;
