    
// async await >> promise chains  >> callback hell

// async await is better than promise chains
// promise chains is better than callback
// We generally use async await in modern JavaScript

//**************************BASIC SYNTAX OF PROMISE*****************************//

    const getData =(id) => {
        return new Promise( (resolve, reject) => {

            setTimeout(()=>{
                console.log("Data: ", id)
                resolve("Found!")
            },2000)
        })
    }
        
    getData(1).then( (result)=>{
            console.log("Success!" + result)
    }).catch( ()=>{
            console.log("Failed!")
    })

    // OUTPUT: 
    // Data:  1
    // Success!Found!


//*********************************************************************************//

// Very BASIC SYNTAX OF PROMISES
// Very BASIC SYNTAX OF PROMISES

            // resolve and reject are callbacks provided by JS

let p = new Promise( (resolve, reject) => {
    let a = 1 + 2
    if( a == 3){
        resolve( "Resolved!")
    }
    else{
        reject("rejected!")
    }
});

p.then( (message) =>{
    console.log("Hello ! "+message)
}).catch(() =>{
    console.log("Hello ! "+message)
})

// output: Hello ! Resolved!

//*********************************************************************************//

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
    console.log('Resolved: ',data);
}).catch( (err) => {
    console.log('Error occured! ', err);
});
