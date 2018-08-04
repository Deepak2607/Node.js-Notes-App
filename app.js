const fs= require('fs');
const os= require('os');
const notes= require('./notes');
const _= require('lodash');
const yargs= require('yargs');

//var userInfo= os.userInfo();
//fs.appendFileSync('greetings.txt',`Hello ${userInfo.username} You are ${notes.age}` );

//const filteredArray= _.uniq([1,1,1,2,3,4,2,2,4,3,2,1]);
//console.log(_.isString(true));
//console.log(_.isString('deepu'));
//console.log(filteredArray);
//
//console.log(userInfo);
//console.log(notes.add(1, 2));

//console.log('process: ',process.argv);
//const command=process.argv[2];

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











