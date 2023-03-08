const chalk = require('chalk');
const { string } = require('yargs');
const yargs = require('yargs');

const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add notes',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body..',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body:', argv.body)
    }
})

//for remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing note..')
    }
})

//for list
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('listing the notes..')
    }
})

//for read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('reading notes..')
    }
})

yargs.parse();