// QUESTION NO . 01
// var studentNames = [];

// QUESTION NO . 02
// var studentObject = {};

// QUESTION NO . 03
// var studentNames = ["Amar", "Akber", "Ahmed", "Ali"];

// QUESTION NO . 04
// var numbers = [1, 2, 3, 4, 5];

// QUESTION NO . 05
// var booleanValues = [true, false];

// QUESTION NO . 06
// var mixedArray = ["Ahmed", 10, true, "Ali", false, 14];

// QUESTION NO . 07
// var educationQualifications = [
//     "SSC",
//     "HSC",
//     "BCS",
//     "BS",
//     "BCOM",
//     "MS",
//     "M. Phil.",
//     "PhD"
//   ];
  
//   document.write("<h2>Qualifications:</h2>");
//   document.write("<ol>");
  
//   for (let i = 0; i < educationQualifications.length; i++) {
//     document.write(`<li>${educationQualifications[i]}</li>`);
//   }
  
//   document.write("</ol>");

// QUESTION NO . 08
// var studentNames = ["Amar", "Akber", "Ahmed"];

// var scores = [420, 380, 450];

// var totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//   var studentName = studentNames[i];
//   var score = scores[i];
//   var percentage = (score / totalMarks) * 100;

//   document.write(`${studentName}: Score = ${score}, Percentage = ${percentage.toFixed(2)}%`);
// }

// QUESTION NO . 09
// var colorNames = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink"];

// document.write("<h2>Color Names:</h2>");
// document.write("<ul>");

// for (let i = 0; i < colorNames.length; i++) {
//   document.write(`<li>${colorNames[i]}</li>`);
// }

// document.write("</ul>");

// QUESTION NO . 09 (a)
// var colorNames = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink"];

// var newColor = prompt("Enter a color to add to the beginning:");

// colorNames.unshift(newColor);

// document.write("<h2>Updated Color Names:</h2>");
// document.write("<ul>");

// for (let i = 0; i < colorNames.length; i++) {
//   document.write(`<li>${colorNames[i]}</li>`);
// }

// document.write("</ul>");

// QUESTION NO . 09 (b)
// var colorNames = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink"];

// var newColor = prompt("Enter a color to add to the end:");

// colorNames.push(newColor);

// document.write("<h2>Updated Color Names:</h2>");
// document.write("<ul>");

// for (let i = 0; i < colorNames.length; i++) {
//   document.write(`<li>${colorNames[i]}</li>`);
// }

// document.write("</ul>");

// QUESTION NO . 09 (c)

// var colorNames = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink"];

// colorNames.unshift("Cyan", "Magenta");

// document.write("<h2>Array after Adding Colors to the Beginning:</h2>");
// document.write("<ul>");

// for (let i = 0; i < colorNames.length; i++) {
//   document.write(`<li>${colorNames[i]}</li>`);
// }

// document.write("</ul>");

// QUESTION NO . 09 (d)
// colorNames.shift();

// document.write("<h2>Array after Deleting the First Color:</h2>");
// document.write("<ul>");

// for (let i = 0; i < colorNames.length; i++) {
//   document.write(`<li>${colorNames[i]}</li>`);
// }

// document.write("</ul>");

// QUESTION NO . 09 (e)
// var colorNames = ["Cyan", "Magenta", "Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink"];

// colorNames.pop();

// document.write("<h2>Array after Deleting the Last Color:</h2>");
// document.write("<ul>");

// for (let i = 0; i < colorNames.length; i++) {
//   document.write(`<li>${colorNames[i]}</li>`);
// }

// document.write("</ul>");

// QUESTION NO . 09 (f)
// var addIndex = parseInt(prompt("Enter the index to add a color:"));
// var newColor = prompt("Enter the color to add:");

// colorNames.splice(addIndex, 0, newColor);

// document.write("<h2>Array after Adding Color at User-Defined Index:</h2>");
// document.write("<ul>");

// for (let i = 0; i < colorNames.length; i++) {
//   document.write(`<li>${colorNames[i]}</li>`);
// }

// document.write("</ul>");

// QUESTION NO . 09 (g)
// var deleteIndex = parseInt(prompt("Enter the index to start deleting colors:"));
// var deleteCount = parseInt(prompt("Enter the number of colors to delete:"));

// colorNames.splice(deleteIndex, deleteCount);

// document.write("<h2>Array after Deleting Colors from User-Defined Index:</h2>");
// document.write("<ul>");

// for (let i = 0; i < colorNames.length; i++) {
//   document.write(`<li>${colorNames[i]}</li>`);
// }

// document.write("</ul>");

// QUESTION NO . 10
// let studentScores = [85, 92, 78, 65, 95, 88, 70];

// studentScores.sort(function(a, b) {
//   return a - b;
// });

// console.log("Sorted Student Scores:", studentScores);

// QUESTION NO . 11
// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "San Francisco"];

// var selectedCities = cities.slice(1, 4);

// console.log("Selected Cities:", selectedCities);

// QUESTION NO . 12
// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// console.log(singleString);

// QUESTION NO . 13
// var queue = [];

// queue.push("Value 1");
// queue.push("Value 2");
// queue.push("Value 3");

// var dequeuedValue1 = queue.shift();
// var dequeuedValue2 = queue.shift();
// var dequeuedValue3 = queue.shift();

// console.log(dequeuedValue1); 
// console.log(dequeuedValue2); 
// console.log(dequeuedValue3); 

// QUESTION NO . 14
// let stack = [];

// stack.push("Value 1");
// stack.push("Value 2");
// stack.push("Value 3");

// let poppedValue1 = stack.pop();
// let poppedValue2 = stack.pop();
// let poppedValue3 = stack.pop();

// console.log(poppedValue1); 
// console.log(poppedValue2); 
// console.log(poppedValue3); 

// QUESTION NO . 15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write(`<option value="${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`);
}

document.write("</select>");
