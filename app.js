// Node and Third Party Modules
const fs = require('fs')
const _ = require('lodash')
// Modules Written By
const notes = require('./notes.js')

console.log(_.isString(true));
console.log(_.isString("Dileep Thomas"));
console.log(_.isString(1));

let arr = ["dileep" , "Thomas", 1, 4 ,4 ,5, 6]
console.log(_.uniq(arr));

// like window  in node gloal is used
// console.log("global", global);
// like dom in node is process object
console.log(process.argv[2]);
let argument = process.argv[2]
if(argument === "add"){
  console.log("adding notes");
}else if(argument === "read" ){
  console.log("reading notes");
}else if(argument === "remove"){
  console.log("removing notes");
}
else{
  console.log("command not recognized");
}
