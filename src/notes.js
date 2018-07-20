
const fs = require('fs');

const fetchNotes = () => {
    var notes;
    try {
        const stringNotes = fs.readFileSync('notes-app-data.json')
        notes = JSON.parse(stringNotes);
    }
    catch(e){
        notes = [];
    }
    return notes;
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-app-data.json', JSON.stringify(notes))
}

const addNotes =  (title, body) => {
    const newNote = {
        title,
        body
    };

    let notes = fetchNotes();
    const isTitleHasDuplicates = notes.filter((note)=> note.title === title )
    if(isTitleHasDuplicates.length === 0) {
        notes.push(newNote);
        saveNotes(notes);
        return newNote;
    }
}

const getAllNotes = ()=>{
    console.log("get allnotes");
}

const getNote = (title) =>{
    let notes = fetchNotes();
    let note = notes.filter((note) => note.title === title)
    if(note && note.length){
        return note[0];
    }
}

const deleteNote = (title) => {
    let notes = fetchNotes();
    const newNotes = notes.filter((note)=> note.title!==title);
    saveNotes(newNotes);
    return newNotes.length !=notes.length    
}

const logNotes = (note) => {
    console.log('title:', note.title);
    console.log('body:', note.body);
    console.log('----');
}
module.exports = {
    addNotes,
    getAllNotes,
    getNote,
    deleteNote,
    logNotes
}