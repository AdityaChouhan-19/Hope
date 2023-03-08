const chalk = require('chalk');
const notes = require('./notes');

const cmdWord = process.argv[2]; //storing the third item in argv array in variable cmdWord;

if (cmdWord === 'add') {
    console.log('add...')
} else if (cmdWord === 'remove') {
    console.log('remove...')
}

//use node app add/remove in cmd to see what's happening!