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
