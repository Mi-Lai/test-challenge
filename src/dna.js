//DNA String Validator
//.
/*Create a function to validate DNA strings as canonical DNA structure (e.g., 'CTAGGGTA').
Allow only canonical DNA bases ('C', 'T', 'A', 'G').
The function should be case-sensitive. Only accept uppercase bases.
Return empty string for invalid or empty inputs.
Return true if the string is a valid DNA sequence.*/
//.......
function isValidateDNA(dna) {
    // If input is empty or not a string, return an empty string
    if (typeof dna !== 'string' || dna.length === 0) {
      return '';
    }
  
    // Check if every character in the DNA string is a valid DNA base
    const isValid = dna.split('').every(base => ['C', 'T', 'A', 'G'].includes(base));
  
    // If the string is valid, return true, otherwise return false
    return isValid ? true : '';
  }
  
  //.

  module.exports ={isValidateDNA};
  //.


  