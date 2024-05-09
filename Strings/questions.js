
// Q1: Write a JavaScript function that prints characters from 'a' to 'z' using loop.

console.log("a".charCodeAt(0));     // output: 97

console.log(String.fromCharCode(65));       // output: A


for( let char = 97; char <= 122; char++){
    console.log(String.fromCharCode(char));
}

// Q2: Write a JavaScript function that count numbers of vowels in a string;

    const text = "Permission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files  to deal";

    let count = 0;
    const countVowels = ( (text) => {
        const vowels = "aeiou";
    
        for( let char of text){
            if(vowels.includes(char)){
                count++;
            }
        }
        return count;
    });
    
    console.log(countVowels(text));



// Q3: Write a JavaScript function that checks all vowels are present or not.

const checkVowels = ( (text) => {
    const vowels = "aeiou";

    for( let char of vowels){
        if(!text.includes(char)){
            return false;
        }
    }
    return true;
})

console.log(checkVowels(text));

// Q4: Write a JavaScript program to check wheather a text is Pangram or not.
    const text2 = 'The quick brown fox jumps over the lazy dog.';

    const isPangram = ( (str) => {

        const alphabets = 'abcdefghijklmnopqrstuvwxyz';
        const myStr = str.toLowerCase(); 
        // console.log(myStr);
        
        for( let char of alphabets){
            if( !myStr.includes(char)){
                return false;
            }
        }
        return true;
    });

    if(isPangram(text2)){
        console.log("Pangram!");
    }
    else{
        console.log("Not Pangram!");
    }

    

