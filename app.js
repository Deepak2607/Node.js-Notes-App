const fs= require('fs');
const os= require('os');
const notes= require('./notes');
const _= require('lodash');
const yargs= require('yargs');

const argv= yargs.argv;
const command=argv._[0];
console.log('command: ',command);
console.log('yargs: ',yargs.argv);


if(command==='read'){
    notes.getNote(argv.title);
}
else if(command==='add'){
    notes.addNote(argv.title, argv.body);
}
else if(command==='list'){
    notes.getAll();
}
else if(command==='remove'){
    notes.removeNote(argv.title);
}











