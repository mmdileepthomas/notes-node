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
  notes.readNote(argv.title)
}else if(command === "remove"){
  notes.removeNote(argv.title)
}
else{
  console.log("command not recognized");
}
