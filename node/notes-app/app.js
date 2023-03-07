//you need to require file system module before use!
const fs = require('fs');

// format ('name of file', 'content')
//if file doesn't exit it will be created, if it exists it will be overwritten.

//fs.writeFileSync('notes.txt', 'I am Aditya!');  <-------

//activity
// appendFileSync() to append content to previously created file.
fs.appendFileSync('notes.txt', '\nI am trying to learn Node.JS!');