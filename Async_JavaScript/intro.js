
//******************************************************************************** *//

    // YOUTUBE:  https://www.youtube.com/watch?v=d3jXofmQm44&t=3229s
    // async await >> promise chains  >> callback hell

    // async await is better than promise chains
    // promise chains is better than callback 
    // JavaScript is a single threaded language which means JS executes line by line
    // We generally use async await in modern JavaScript

//******************************************************************************** *//

        console.log("One");
        console.log("Two");

        setTimeout(() => {
            console.log("The asynchronus function is fired!");
        }, 3000);
        console.log("Three");
        console.log("Four");

// Asynchronous JavaScript => Defination: Start something now and finish later
