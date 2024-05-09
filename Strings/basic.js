
const str = "Hello World!";
console.log(str.length);

// how use single and double quotes withing double quotes   => add backslace
// just add a backSlace before any special character to use that character
const text = "how use 'single' and \"double\" quotes withing double quotes";
console.log(text);

const stringToArray = Array.from(str);
console.log(stringToArray);

        // output: [
                    // 'H', 'e', 'l', 'l',
                    // 'o', ' ', 'W', 'o',
                    // 'r', 'l', 'd', '!'
                    // ]

const result =  text.search('quotes');
const result2 =  text.search(/Quotes/i);        // this is how we can ignore casecensibity
console.log(result);
console.log(result2);

const result3 = text.match('double');
const result4 = text.match(/Double/gi);      // g = global => kotobar double lekha ache sentense a, i = ignore caseSensivity
console.log(result3);
console.log(result4);