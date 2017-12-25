addNote = (title, body) => {
  console.log("adding notes" , title, body);
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
