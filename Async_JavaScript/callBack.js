    
//******************************************************************************** *//

                    // async await >> promise chains  >> callback hell

                    // async await is better than promise chains
                    // promise chains is better than callback
                    // We generally use async await in modern JavaScript

//*******************************BASIC EXAMPLE OF Asyncronous*******************************//

function getName( name){
    setTimeout(() => {
        console.log(name)
    }, 2000)
}
getName("Soumik1")

            // OUTPUT:
            //     Soumik1

//*******************BASIC EXAMPLE : CALLBACK HELL OR PYRAMID OF DOOM ************************//

function getName2( name, getNextName){
    setTimeout(() => {
        console.log(name)
        if(getNextName){        // If there exists next data then only call it 
            getNextName();          // ( see innermost getName call below in callback hell)
        }
    }, 2000)
}
getName2("Soumik1", ()=>{
    getName2("Soumik2", ()=>{
        getName2("Soumik3", ()=>{
            getName("THE END!");            //  There is not next data
        })
    })
})

            // OUTPUT:
            //         Soumik1
            //         Soumik2
            //         Soumik3
            //         THE END!

//*****************************ANOTHER EXAMPLE OF CALLBACK*******************************//

const userLeft = false;
const userWatchingNetflix = true;

function watchTutorialCallback( callback, errorCallback){
	
	if( userLeft){
		errorCallback({
			name: "User left!",
			message: "There is no user"
		})
	} else if(userWatchingNetflix){
		errorCallback({
			name: "\nUser Watching Netflix!",
			message: "\nPlease stop wasting time"
		})
	}
	else{
		callback("\nThank you for watching tutorial")
	}
}
watchTutorialCallback( (message) => {   // this callback for success
	console.log("\nSuccess" +message)
},(error) => {      // this callback is for error
	console.log(error.name + " " +error.message)
})

// OUTPUT:  User Watching Netflix! 
//          Please stop wasting time

////////////// PROMISE VERSION OF ABOVE CALLBACK ////////////////

const userLeft1 = false;
const userWatchingNetflix1 = true;

function watchTutorialPromise(){
    return new Promise( (resolve, reject)=> {
        if( userLeft1){
            reject({
                name: "User left!",
                message: "There is no user"
            })
        } else if(userWatchingNetflix1){
            reject({
                name: "\nUser Watching Netflix!",
                message: "\nPlease stop wasting time"
            })
        }
        else{
            resolve("\nThank you for watching tutorial")
        }
    })
}
watchTutorialPromise().then((message) => {   // this promise for success
	console.log("\nSuccess" +message)
}).catch((error) => {      // this promise is for error
	console.log(error.name + " " +error.message)
})
// OUTPUT:  User Watching Netflix! 
//          Please stop wasting time

///****************************************************************************** */

const UploadVideo1 = new Promise( (resolve, reject) => {
    resolve('Video 1 successfully uploaded!\n')
})
const UploadVideo2 = new Promise( (resolve, reject) => {
    resolve('Video 2 successfully uploaded!\n')
})
const UploadVideo3 = new Promise( (resolve, reject) => {
    resolve('Video 3 successfully uploaded!\n')
})

Promise.race([
        UploadVideo1,
        UploadVideo2, 
        UploadVideo3
]).then( (message) => {
    console.log(message)
}).catch(() => {
    console.log("failed to upload!")
})

// OUTPUT: 
//         [
//             'Video 1 successfully uploaded!\n',
//             'Video 2 successfully uploaded!\n',
//             'Video 3 successfully uploaded!\n'
//         ]


// If I use Promise.race instead of Promise.all output would be
// OUTPUT: 
//         Video 1 successfully uploaded!
