const Notes = require('./notes');

console.log(Notes());
//or
const YourNotes = Notes();
console.log(YourNotes);

//process has all the command line argument stored that we pass in cmd

const l = console.log

l(process.argv)
l(process.argv[2])

//use node app Aditya in cmd to know what's happening