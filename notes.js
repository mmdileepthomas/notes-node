const fs = require('fs')
addNote = (title, body) => {
  let notes = []
  let note = {
    title,
    body
  }
  try {
    let noteString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(noteString)
  } catch (e) {

  }
  // checking duplicate title
  let duplicateNotes = notes.filter(note => note.title === title)
  if(duplicateNotes.length === 0){
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
  }

}
readNote = (title) => {
  console.log("reading note", title);
}
getAll = () => {
  console.log("listing all notes");
}
removeNote = (title) => {
  console.log("removing note", title);
}
module.exports ={
  addNote,
  readNote,
  removeNote,
  getAll
}
