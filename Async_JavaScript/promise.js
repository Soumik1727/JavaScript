
const getTodos = (resource) => {
    
    return new Promise( (resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange',() => {
        
        if( request.readyState === 4 && request.status === 200 ){
                        // parse()=> it takes a JSON string and converts the string into a JS object.
            const data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if(request.readyState === 4){
            reject("Error getting resource!");
        }
    });

    request.open('GET',resource);
    request.send();
    });
};

getTodos('Async_JavaScript/json.json').then ( (data) => {
    console.log('Resolved: ',data);
}).catch( (err) => {
    console.log('Error occured! ', err);
});

    // Promises  // Basic   // Syntax
    // Promises  // Basic   // Syntax

// const getSomething = () => {

//     return new Promise( (resolve, reject) => {
//         // Fetch something
//         resolve('Get something...');
//     });
// }
// getSomething().then( (data) => {         
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then( data => {
//     console.log(data);
// }).catch( err => {
//     console.log(err);
// });