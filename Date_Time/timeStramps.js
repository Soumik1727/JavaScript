

const now = new Date();
const before = new Date('July 27 1999 01:43:00');

console.log(now.getTime());
        // The output is the miliseconds since the 1st Jan 1970;


const diff = now.getTime() - before.getTime();

const minutes = Math.round( diff / 1000 / 60 );
const hours = Math.round( minutes / 60 );
const days = Math.round( hours /24);
const years = days / 365;

console.log(years);

// Converting a timeStramps into a Date object

const timeStramps = 1711649423552 ;
console.log(new Date(timeStramps));