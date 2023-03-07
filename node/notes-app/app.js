//npm init
//npm i {package name} validator

const validator = require('validator');

const Notes = require('./notes');

//console.log(Notes());
//or
const YourNotes = Notes();
console.log(YourNotes);

console.log(validator.isEmail('aditya@gmail.com')); //returns true if valid and vice-versa; for detailed info check npm website. 

console.log(validator.isUrl('http://google.com'));