let square = x => x * x
console.log(square(4));

let user ={
  name:"Dileep Thomas",
  sayHi: () => {
    console.log(arguments);
    console.log(`hi , i m ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`hi , i m ${this.name}`);
  }
}
user.sayHi(5,6,7);
user.sayHiAlt(1,2,3);
