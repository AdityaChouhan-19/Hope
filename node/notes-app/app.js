const chalk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs');

const notes = require('./notes');

//command keyord in yargs

//it calls the handler function if the keyword describle in "command:" property is detected in the cmd  
//for add
yargs.command({
    command: 'add',//property
    describe: 'Add notes',//property
    builder: {
        title: {
            describe: 'title',
            demandOption: true,// this property means that this flag is mandatory (node app add --title)
            type: 'string'//input type from cmd
        }
    },//property
    handler: function (argv) {
        console.log('adding notes..', argv) 
    }//property
})//node app add

//for remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing note..')
    }
})//node app remove --doing so will call the function created inside this yargs command

//for list
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('listing the notes..')
    }
})//node app list

//for read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('reading notes..')
    }
})//node app read

// console.log(yargs.argv) // you will either have to use this
//or
yargs.parse(); // or this otherwise code in function of add command property wouldn't work