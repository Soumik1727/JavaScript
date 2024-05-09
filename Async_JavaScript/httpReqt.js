// What are HTTP request?

// -> We make HTTP request to get data from another Server 
// -> We make this request to API endpoint

// 404 -> Data Not Found!
// 200 -> Data Found!

// JSONPLACEHOLDER WEBSITE: https://jsonplaceholder.typicode.com/
// Website MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

const getTodos = () => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() => {
        // console.log(request, readyState);
        if( request.readyState === 4 && request.status === 200 ){
            console.log(request.responseText);
        }
        else if(request.readyState === 4){
            console.log("Data could not fetch.");
        }
    });

    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();
};

getTodos();