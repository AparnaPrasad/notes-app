
console.log("starting app.js ");

//3rd party lib
const _lodash = require("lodash");
const fs = require('fs');
const yargs = require('yargs');

//user created lib
const notes = require("./notes");

const command = process.argv[2];
const yarg_argv = yargs.argv;
debugger;
console.log("process.argv:", command);
console.log('yarg argv', yarg_argv);
if(command === "add"){
    const addedNotes = notes.addNotes(yarg_argv.title , yarg_argv.body);
    addedNotes ? notes.logNotes(addedNotes): console.log("Error duplicate title!");
}

else if(command === "list") {
    notes.getAllNotes();
}

else if(command === "remove") {
    const res = notes.deleteNote(yarg_argv.title) 
    res? notes.logNotes(res) : console.log("item not found");
}


else if(command === "read") {
    console.log("read a note");
    const res  = notes.getNote(yarg_argv.title);
    res ? notes.logNotes(res) : console.log("no item found");  
}
else{
    console.log("command not recongnised")
}

