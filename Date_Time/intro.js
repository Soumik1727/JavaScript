        // Object -> Date, object literal , functions
const now = new Date();
console.log(now);
        // year , month ,day, time
console.log('getFullYear: ',now.getFullYear());
console.log('getMonth: ',now.getMonth());
console.log('getDay: ',now.getDay());
console.log('getDate: ',now.getDate());
console.log('getHours: ',now.getHours());
console.log('getMinutes: ',now.getMinutes());
console.log('getSeconds: ',now.getSeconds());
        // Day string
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());