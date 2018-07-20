const fs = require('fs');

var originalNote = {
        title: 'Some Title',
        body: 'Soem body'
}

var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString);

var readNoteString = fs.readFileSync('notes.json');
var readNoteObj = JSON.parse(readNoteString)
console.log("typeof", typeof readNoteObj);
console.log("title", readNoteObj.title);