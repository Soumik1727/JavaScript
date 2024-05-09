
//      Store data in local storage

    // localStorage.setItem("Key","value");
    localStorage.setItem("name","Soumik");
    localStorage.setItem("roll",46);

//      Get data from local storage

    let name = localStorage.getItem("name");
    console.log(localStorage.name);


//      Updating data from local storage

// localStorage.setItem("name","Soumik2");

// let name2 = localStorage.getItem("name");
// console.log(name2);

//      Deleting data from local storage

                // Remove single item

                localStorage.removeItem("name");

                name = localStorage.getItem("name");
                console.log(name);

                // Remove all item

                localStorage.clear();
