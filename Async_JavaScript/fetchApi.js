
// then() => on success
//catch() => on failure

fetch('json.json').then( (response) => {
    console.log('resolved',response);
    return response.json();
}).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log('Rejected', err);
});