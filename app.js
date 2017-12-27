// Node and Third Party Modules
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')
// Modules Written By
const notes = require('./notes.js')

const argv = yargs.argv
let command = argv._[0]
if(command === "add"){
 let note = notes.addNote(argv.title, argv.body)
 if(note){
   console.log("Note Created" , argv.title);
 }else{
   console.log("Note title taken already");
 }
}else if (command === "list") {
  notes.getAll();
}else if(command === "read" ){
  let note = notes.readNote(argv.title)
  if(note){
    console.log("Note Found");
    console.log(`Body: ${note.body}`);
  }else{
    console.log("Note not Found");
  }
}else if(command === "remove"){
  let noteRemoved = notes.removeNote(argv.title)
  let message = noteRemoved ? "Note has been removed" : "Note not found"
  console.log(message);
}
else{
  console.log("command not recognized");
}
