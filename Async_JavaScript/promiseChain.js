    

// async await >> promise chains  >> callback hell

// async await is better than promise chains
// promise chains is better than callback
// We generally use async await in modern JavaScript

//************************** BASIC SYNTAX OF PROMISE CHAINING *****************************//

const getData =(id) => {
    return new Promise( (resolve, reject) => {

        setTimeout(()=>{
            console.log("Data: ", id)
            resolve("Found!")
        },2000)
    })
}
getData(1) 
    .then( (result)=>{
        return getData(2)       // Promise 1( getData(1) ) will return another promise getData2
    })
    .then( ()=>{
        return getData(3)       // Promise 2( getData(1) ) will return another promise getData3
    })
    .then( ()=>{
        console.log("Success!");
    })
    .catch( (err)=>{
        console.log("Failed!"+err)
})

        // OUTPUT: 
            // Data:  1
            // Data:  2
            // Data:  3
            // Success!
//******************* async-await version of the above program ******************************//
    const getData1 =(id) => {
        return new Promise( (resolve, reject) => {

            setTimeout(()=>{
                console.log("Data: ", id)
                resolve("Found!")
            },2000)
        })
    }

    async function getAllData(){
        await getData1(1);
        await getData1(2);
        await getData1(3);
    }
    getAllData()
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
    console.log('Promise 1 Resolved: ',data);
    return getTodos('json.json');
}).then ( (data) => {
    console.log('Promise 2 Resolved: ',data);
}).catch( (err) => {
    console.log('Error occured! ', err);
});
