console.log('Hello World!')

// Variables

// Let variable saving the number 28 on the name age
let age = 28;
// Chaining method:
console.log("Min alder er:" , age);
// Template litteral:
console.log(`Min alder er: ${age}`);
console.log(typeof age);

// Const variable saving the string Julie on the name name.
const name = "Julie";
console.log("Mitt navn er:" , name);
console.log(typeof name);

// Const variable saving the boolean true on the name isPresent
const isPresent = true;
console.log("Er tilstede?" , isPresent);
console.log(typeof isPresent);

// Two const variables saving strings
// One const variable saving the data from the two first variables
const firstName = "Julie";
const lastName = "Hauge";
const fullName = firstName + " " + lastName;
console.log("fullName variable viser:" , fullName);

const htmlElement = document.querySelector("#javaScriptData");
htmlElement.textContent = fullName;