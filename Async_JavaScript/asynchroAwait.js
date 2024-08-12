
            // asynchronous functions always return promise
const getTodos = async() => {       
    
    const response = await fetch('json.json');

    if( response.status != 200 ){
        throw new Error("Can't fetch the data...");
    }
    const data = await response.json();

    return data;

};

getTodos().then( data => console.log('Resolved' ,data))
          .catch( err => console.log('Rejected' ,err.message));



// const test = getTodos();
// console.log(test);