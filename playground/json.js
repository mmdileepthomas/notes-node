// converting object to string
let obj = {
  name:"Dileep"
}
let stringObj = JSON.stringify(obj)
console.log("type of stringObj", typeof stringObj);
console.log("value in stringObj after converting from obj to json",stringObj);

// converting json to object and fetching the values
let personString = '{"name": "Dileep Thomas", "age": 25}'
let person = JSON.parse(personString)
let age = person.age
console.log("type of person", typeof person);
console.log("value of age after converting from json to object and fetching age" , age);
