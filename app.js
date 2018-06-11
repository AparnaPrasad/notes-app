
const notes = require("./notes");
const _lodash = require("lodash");

console.log("starting app.js ");
console.log("add notes", notes.addNotes(5,7));
console.log("check", _lodash.uniq([4,5,3,3,3,"hello", "4", "hellooo", "hello"]));
