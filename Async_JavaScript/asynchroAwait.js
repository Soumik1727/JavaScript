    
// async await >> promise chains  >> callback hell

// async await is better than promise chains
// promise chains is better than callback
// We generally use async await in modern JavaScript

//********************** We can make any function into a async function  ****************************//
    // asynchronous functions always return promise

        async function sayHello(){
            console.log(" Hello");
        }
        sayHello();  
          
        // Output: Hello 
            // Main different from the normal function is 
            // with output hello is will return a promise 

//*******************************BASIC EXAMPLE OF Asyncronous*******************************//

        function api(){
            return new Promise( (resolve, reject) => {
                setTimeout( ()=> {
                    console.log("Weather data!");
                    resolve(200);
                }, 2000)
            })
        }

        async function getWeatherData(){
            await api();    // first time call is done here and makes others to wait until first call is over
            await api();    // second time call 
        }
        getWeatherData()

                // OUTPUT:
                //     Weather data!
                //     Weather data!

        // ****NOTE****
                // Unlike callback hell or promise chain, here in async-await we are creating an extra function then 
                // calling the main function. It's a headache.
                //             To avoid it we use ' IIFE(Immediately Invoked Function Expression)'. 
                //             IIFE is a function immedately get executed as soon as it's defined

                // example:

                    // ( async function (){
                    //     await api();
                    //     await api();
                    // })();
                                    // OUTPUT:
                                    //     Weather data!
                                    //     Weather data!

//*******************************EXAMPLE OF Asyncronous*******************************//

const getTodos = async() => {       
    
    const response = await fetch('json.json');

    if( response.status != 200 ){
        throw new Error("Can't fetch the data...");
    }
        // 'await' pauses the execution of its surrounding async function until the async is settled! 
        // Means, jotokhon amader promise pending thakbe , await asepaser sob kaj bondho kore wait korbe!
    const data = await response.json();

    return data;

};

getTodos().then( data => console.log('Resolved' ,data))
          .catch( err => console.log('Rejected' ,err.message));

// const test = getTodos();
// console.log(test);