const array=["Facebook","Youtube","Amazon","Google","Twitter"]

const obj={
    fb:"Facebook",
    yt:"Youtube",
    amz:"Amazon",
    g:"Google",
    twt:"Twitter"
}

const objArr=[
  {
    id: 1,
    firstName: "Cristiano",
    lastName: "Ronaldo"
  }, {
    id: 2,
    firstName: "Kobe",
    lastName: "Bryant"
  }, {
    id: 3,
    firstName: "Mesut",
    lastName: "Ozil"
  }, {
    id: 4,
    firstName: "Steph",
    lastName: "Curry"
  }, {
    id: 5,
    firstName: "Leo",
    lastName: "Messi"
  }
];

//! For
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)
    
}

//!For...in   => this loop is for Object
for (const key in obj) {
    console.log(`Full form of ${key} is ${obj[key]}`)
}

for (const key in objArr) {
    console.log(objArr[key].firstName + ' ' + objArr[key].lastName);
}

//!For...of   => this loop is for array,strings
for (const i of array) {
    console.log(i)
    
}
for (const i of objArr) {
    for (const key in i) {
        console.log(i[key])
    }
    
}

const str="Wakanda"
for (const letter of str) {
    console.log(letter)
}



//!do...while   =>A do...while loop in JavaScript is a control structure that executes a block of code at least once, and then repeatedly executes the block, as long as the specified condition is true.The loop body will be executed at least once, even if the condition is false.
let x = 1;

do {
  console.log(x);
  x++;
} while (x <= 5);

//!while   =>In a while loop, the condition is tested before the loop body is executed. If the condition is false, the loop body will not be executed.
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}


//!switch   =>The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. Use switch to select one of many blocks of code to be executed. This is the perfect solution for long, nested if/else statements.The break keyword breaks out of the switch block. This will stop the execution of more execution of code and/or case testing inside the block. If break is omitted, the next code block in the switch statement is executed.The default keyword specifies some code to run if there is no case match. There can only be one default keyword in a switch. Although this is optional, it is recommended that you use it, as it takes care of unexpected cases.
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}

//!try...catch  =>error handling
