const isValidateDNA= require(".src/dna.js");//



console.log(isValidateDNA("CTAG")); // true
console.log(isValidateDNA("CTXG")); // should return false due to 'X'
console.log(isValidateDNA("ctag")); // should return false due to lowercase
console.log(isValidateDNA("")); // should return false for empty string
//..............
