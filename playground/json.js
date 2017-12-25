// Require Node and Third Party Modules
const fs = require('fs')
let originalNote = {
  title: "Sample Title",
  body: "Sample Body"
}
let originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)
let noteString = fs.readFileSync('notes.json')
let note = JSON.parse(noteString)
console.log(typeof note);
console.log(`title is ${note.title}`);
