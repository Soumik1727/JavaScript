const text = "how use 'single' and \"double\" quotes withing double quotes";

            // split() convert a string into a array.
textArr = text.split("e");          // make the text into a array on the basis of 'e'
console.log(textArr);

    //  output:   [
                //     'how us',
                //     " 'singl",
                //     `' and "doubl`,
                //     '" quot',
                //     's withing doubl',
                //     ' quot',
                //     's'
                // ]
const str = " apple, mango, banana";
strArr = str.split(",").reverse();
console.log(strArr);                    // output: [ ' banana', ' mango', ' apple' ]


// console.log(str.split());           // output: [ ' apple, mango, banana' ]
console.log(str.split(0));              // // output: [ ' apple, mango, banana' ]
console.log(str.split(""));

    // output:      [
                    // ' ', 'a', 'p', 'p', 'l',
                    // 'e', ',', ' ', 'm', 'a',
                    // 'n', 'g', 'o', ',', ' ',
                    // 'b', 'a', 'n', 'a', 'n',
                    // 'a'
                    // ]

// =========================ARRAY TO STRING=============================

const myArr = [ ' apple, mango, banana' ];

const result = myArr.join();
const result2 = myArr.join(",");
console.log(result);                // output:  apple, mango, banana
console.log(result2);               // output:  apple, mango, banana

//==================================================================

console.log("a".charCodeAt(0));   // Character code of a...  // output: 97