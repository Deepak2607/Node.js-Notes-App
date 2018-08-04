//const obj={
//    name:'Deepak',
//}
//const stringObj=JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);
//
//const string='{"name":"Deepak","age":21}';
//const objString=JSON.parse(string);
//console.log(typeof objString);
//console.log(objString);

const fs=require('fs');

const originalNoteObj={
    name:'Deepak',
    age:21
}
const originalNoteString=JSON.stringify(originalNoteObj);
fs.writeFileSync('notes.json', originalNoteString);


const noteString=fs.readFileSync('notes.json')
const noteObj=JSON.parse(noteString);

console.log(typeof noteObj);
console.log(noteObj);


