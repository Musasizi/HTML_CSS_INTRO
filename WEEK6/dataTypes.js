// Numbers
let distance = 90;
let amount = -30;
let speed = 10.5;
let balance = -0.3423;

// String
let greeting = "Good morning";
let first_name = "Jane";
let last_name = 'Doe';
let country = `The Republic of Uganda`;

// String Concatenation
console.log(greeting + ' ' + first_name + ' ' + last_name + ' ' + country);

// ES6 - Template Literals
console.log(`${greeting}, ${first_name} ${last_name} coming from ${country}. 🕺🕺🕺`)


// Booleans
let isRaining = false;
let isDancing = true;

let isPlaying = false;
let running = true;


// null
let fullName = null;
fullName = "Doe";


// undefined
let language;

// Symbols
// BigInt

// Objects
let student = {};
student = {
    first_name: "Jane",
    last_name: "Doe",
    access_number: "a9000",
    reg_number: "a9000",
    parent: {
        first_name: "Luke",
        country: "Sudan",
    }
}

student.last_name = "Joan"
// console.log("First name is: ", student.first_name)
// console.log("Last name is: ", student.last_name)
// console.log("District: ", student.district)
// console.log("Parent name: ", student.parent.first_name)
// console.log("Parent name: ", student.parent)

// Nullish coalescing
// console.log("Parent country: ", student?.class?.name)