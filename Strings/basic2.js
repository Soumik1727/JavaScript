

// startsWith() method returns true if the value is found given in the argument ,Otherwise it returns false;

const text = "how use 'single' and \"double\" quotes withing double quotes";

const result = text.startsWith("h");
const result2 = text.startsWith("u",4);

console.log(result);            // output: true
console.log(result2);           // output: true

const ans = text.endsWith("s");         
const ans2 = text.endsWith("quotes");        

console.log(ans);                        // output: true
console.log(ans2);                        // output: true

const newStr = text.slice(9,15);        // slice() support negative indexing.Negative indexing start from the
                                        // right side of the array and its' starting index is -1.
const newString = text.slice(-13,-7);        //    output: double                           
const newStr2 = text.substring(9,15);
console.log(newStr);            // output: single
console.log(newStr2);            // output: single
console.log(newString);            // output: single


const text2 = "support negative indexing.Negative indexing start from the";

console.log(text2.replace("support","Support"));
console.log(text2.replaceAll("indexing","Soumik"));

console.log(text2.charAt(2));
console.log(text2.at(-2));          // same as charAt().at() was introduced in 2022
console.log(text2.charCodeAt(2));

console.log(text.length);

let trimStr = text.trim();      // trim() only removes the starting and ending space.
console.log(trimStr);
