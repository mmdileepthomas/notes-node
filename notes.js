const fs = require('fs')
// fetching notes
fetchNotes = () => {
    try {
      let noteString = fs.readFileSync('notes-data.json')
      return JSON.parse(noteString)
    } catch (e) {
      return [];
    }
  }
saveNotes = (note) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(note))
  }
addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  }
  // checking duplicate title
  let duplicateNotes = notes.filter(note => note.title === title)
  if(duplicateNotes.length === 0){
    notes.push(note)
    saveNotes(notes)
    return note
  }
}
readNote = (title) => {
  console.log("reading note", title);
}
getAll = () => {
  console.log("listing all notes");
}
removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title)
  saveNotes(filteredNotes)
  return notes.length !== filteredNotes.length
}
module.exports ={
  addNote,
  readNote,
  removeNote,
  getAll
}
