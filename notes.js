
const fs= require('fs');

const fetchNotes= ()=> {
    try{
        let notesString= fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){}
}

const saveNotes= (notes)=> {
        fs.writeFileSync('notes-data.json', JSON.stringify(notes)); 
}


const addNote= (title, body)=> {
    let notes=fetchNotes();
    let note={
        title,
        body
    }
    
        let duplicateNotes= notes.filter((n) => n.title!==title);
        if(duplicateNotes.length === notes.length){
            notes.push(note);
            saveNotes(notes);
            console.log('note is created');
        }
        else{
            console.log('title already taken');
        }
  
    
}

const getAll= ()=>{
    const notes=fetchNotes();
    console.log(`${notes.length} note(s) found`);
    for(let i=0; i<notes.length; i++){
      console.log('--');
      console.log('title: ',notes[i].title);  
      console.log('body: ',notes[i].body); 
    }
}

const getNote= (title)=> {
    const notes=fetchNotes();
    const filteredNotes= notes.filter((note)=>{
        return note.title===title;
    })
    if(filteredNotes[0]){
        console.log('note found');
        console.log('---');
        console.log('title: ',filteredNotes[0].title);  
        console.log('body: ',filteredNotes[0].body);
    }
    else{
        console.log('note not found');
    }
                                    
    
}

const removeNote= (title)=>{
    const notes=fetchNotes();
    let filteredNotes= notes.filter((note)=>note.title!== title);
    saveNotes(filteredNotes);
    if(filteredNotes.length!==notes.length){
      console.log('note is removed');  
    }
    else{
        console.log('note not found');
    }
}

module.exports={
    addNote,
    getAll,
    getNote,
    removeNote
}
