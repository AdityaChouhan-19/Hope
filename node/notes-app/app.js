const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

//command keyord in yargs

//it calls the handler function if the keyword describle in "command:" is detected in the cmd  
//for add
yargs.command({
    command: 'add',
    describe: 'Add notes',
    handler: function (){
        console.log('adding notes..')
    }
})//node app add

//for remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function (){
        console.log('removing note..')
    }
})//node app remove --doing so will call the function created inside this yargs command

//for list
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function (){
        console.log('listing the notes..')
    }
})//node app list

//for read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function (){
        console.log('reading notes..')
    }
})//node app read

console.log(yargs.argv)//use node app --help