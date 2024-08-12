
const getTodos = (resource ,callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() => {
        
        if( request.readyState === 4 && request.status === 200 ){
                        // parse()=> it takes a JSON string and converts the string into a JS object.
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if(request.readyState === 4){
            callback('could not get data.',undefined);
        }
    });

    request.open('GET',resource);
    request.send();
};

getTodos( 'json.json',(err, data) => {
    console.log(data);

    getTodos( 'json2.json',(err, data) => {
        console.log(data);
        
        getTodos( 'json3.json',(err, data) => {
            console.log(data);
        
        });
    });
});