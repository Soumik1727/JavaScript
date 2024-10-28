
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

getTodos('json.json').then ( (data) => {
    console.log('Promise 1 Resolved: ',data);
    return getTodos('json.json');
}).then ( (data) => {
    console.log('Promise 2 Resolved: ',data);
}).catch( (err) => {
    console.log('Error occured! ', err);
});
