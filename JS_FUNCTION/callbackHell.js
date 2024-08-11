
// use of callbackHell: When we want data one after another, then we use callbackHell
// Suppose we want to login facebook, firstly we search for userid, if found then only we
// search for password 
function getData(getId, getNextData){
    setTimeout( ()=>{
        console.log("Data: ",getId);
        if(getNextData){
            getNextData();
        }
    },3000);
}

getData(1, () => {
    getData(2, ()=>{
        getData(3);
    });
});