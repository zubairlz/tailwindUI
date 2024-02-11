

// // IF ELSE

// // age checker
// let votingage = 18

// let userage = 17

//  if(userage === votingage){
//      console.log("you can vote")
    
// }   else{
//      console.log("you are a minor")
// }

// // odd and even number indentifier

// let even = function(number){
//     if (number % 2 === 0){
//         return true;
//     }
//     else{
//         return false
//     }
// }       

// // vowels and consonant classifier

// let vowels = ["a", "e", "i", "o", "u"]
// let consonants = ["letter is consonant"]

// letter = window.prompt('insert a letter')
// if (letter === vowels){
//     console.log("letter is a vowel")
// }else{
//     console.log("letter is consonant")
// }

// function largestNumber(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// // Function to perform addition
// function add(a, b) {
//   return a + b;
// }

// // Function to perform subtraction
// function subtract(a, b) {
//   return a - b;
// }

// // Function to perform multiplication
// function multiply(a, b) {
//   return a * b;
// }

// // Function to perform division
// function divide(a, b) {
//   if (b === 0) {
//     return "Error: Cannot divide by zero";
//   }
//   return a / b;
// }




// // SWITCH STATEMENT

// // day of te week printer
// function printDayOfWeek(number) {
//     const daysOfWeek = {
//         1: "Monday",
//         2: "Tuesday",
//         3: "Wednesday",
//         4: "Thursday",
//         5: "Friday",
//         6: "Saturday",
//         7: "Sunday"
//     };
//     if (number >= 1 && number <= 7) {
//         console.log(daysOfWeek[number]);
//     } else {
//         console.log("Invalid input. Please enter a number between 1 and 7.");
//     }
// }



// // the scores of five students is needed for this function to check minimum scores

// function minimumscore(score1, score2, score3, score4, score5){
//     let calculateminimumscoreofstudent = Math.min(score1, score2, score3, score4, score5)
//     return calculateminimumscoreofstudent
// }

// console.log(minimumscore(2, 4, 45, 23, 1))

// // rock paper scissor game

// let playerone = "rock"
// let playertwo = "paper"

// switch(true){
//     case (playerone === "rock" && playertwo === "rock"):
//             console.log("draw")
//             break;
//     case (playerone === "rock" && playertwo === "paper"):
//             console.log("playerone wins")
//             break;
//     case  (playerone === "rock" && playertwo === "scissor"):
//             console.log("playerone wins")
//             break;
//     case (playerone === "paper" && playertwo === "rock"):
//             console.log("playertwo wins")
//             break
// }


// // grade evaluator
// function maximumscore(score1, score2, score3, score4, score5){
//     let calculatemaximumscoreofstudent = Math.max(score1, score2, score3, score4, score5)
//     return calculatemaximumscoreofstudent
// }

// console.log(maximumscore(2, 4, 45, 23, 1))


// // month displayer 
// function printMonthName(number) {
//     const months = {
//         1: "January",
//         2: "February",
//         3: "March",
//         4: "April",
//         5: "May",
//         6: "June",
//         7: "July",
//         8: "August",
//         9: "September",
//         10: "October",
//         11: "November",
//         12: "December"
//     };
//     if (number >= 1 && number <= 12) {
//         console.log(months[number]);
//     } else {
//         console.log("Invalid input. Please enter a number between 1 and 12.");
//     }
// }

// // FOR LOOPS

// // number summation
// function sumUpTo(number) {
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//         sum += i;
//     }
//     return sum;
// }


// // multiplication table
// function multiplicationTable(number) {
//     console.log(`Multiplication table for ${number}:`);
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }




// // aray element printer
// let array = [1,2,3,4,5]
// for(x = 0; x < 5; x++){
//     let newarray = array[x]
//     return newarray

// }

// // FUNCTIONS

// // taking name of user and concatinate with a warm message

// function warmmessage(username){
//     let message = `hi ${username}, we at dev and design appreciates you!`
//     return message
// }
// console.log(warmmessage("joseph"))


// // area calculator of circle

// function areacalc(radius){
//     areaofcircle = Math.PI * radius * radius
//     return areaofcircle
// }
// console.log(areaofcircle(3))

// // area calc of rectangle

// function Rectangle(lenght, breadth){
//     areaofrect = lenght * breadth
//     return areaofrect
// }
// console.log(areaofrect(2, 3))

// // palindrome checker

// function palindromechecker(data){
//     const stringData = String(data).toLowerCase()
//     const reversedata = stringData.split('').reverse().join('')

//     return stringData === reversedata
// }
// console.log(palindromechecker("eye"))

// // a function that reverses a number 

// function reversenumber(number){
//     const numberstring = String(number)


// // sorting in ascending and descending

// const allnumbers = [12, 43, 35, 3]
// allnumbers.sort(sortascending)
// console.log(allnumbers)

// function sortascending(a, b){
//     return a-b
// }

// const newallnumbers = [12, 43, 35, 3]
// newallnumbers.sort(sortdescending)
// console.log(newallnumbers)

// function sortdescending(a, b){
//     return b-a
// }


// let object = {
    
// }


// // function parameters

// let functionadder(numb1, numb2){
//     let addition = numb1 + numb2
//     return addition
// }
// functionadder(1, 2)


// let checkerofword = "characteristics"
// let lenght = checkerofword.length()
// console.log(lenght);


// function calculateAgeDifference(year1, year2) {
//     return Math.abs(year1 - year2);
// }
// calculateAgeDifference(1880 - 1790)



// function currencyconverter(amount, rate){
//     return amount * rate
// }
// currencyconverter(200, 24)


// // ARROW FUNCTION

// const originalArray = [1, 2, 3, 4, 5];
// const doubledArray = originalArray.map(element => element * 2);
// console.log(doubledArray);


// // string concatenation
// const string1 = "Hello";
// const string2 = "world";

// const combinedString = (str1, str2) => str1 + " " + str2;

// console.log(combinedString(string1, string2));


// // number filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers);


// // sentence spliter
// const sentence = "This is a sentence.";

// const words = sentence.split(" ");

// console.log(words);


// // nmuber multiplier
// const multiply = (number, factor) => number * factor;


// // OBJECT LITERALS

// const person = {
//     name: "John Doe",
//     age: 30,
//     occupation: "Software Engineer"
// };

// console.log(person);


// const bookobject = {
//     title : "dev and design",
//     author : "joseph brendan",
//     genre : "javascript bootcamp"
// }

// const animalobject = {
//     specie : "cat",
//     name : "tiger",
//     habitat : 'wild'
// }

// const productobject = {
//     name : "ariel",
//     price : 500,
//     description : "a detergent for home use"
// }
// const addressobject = {
//     street : "ademola adetokumho",
//     city : "abuja",
//     state : "abuja",
//     zipcode : 12334
// }



// // ARRAYS

// // number sorter

// // Array of numbers
// const numbers = [4, 2, 7, 1, 9, 5];

// // Sort in ascending order
// const ascendingOrder = [...numbers].sort((a, b) => a - b);
// console.log("Ascending order:", ascendingOrder);

// // Sort in descending order
// const descendingOrder = [...numbers].sort((a, b) => b - a);
// console.log("Descending order:", descendingOrder);



// // word finder

// let listarray = ["saw", "metal", "jump", "supply"]
// let wordfinder = window.prompt("enter your word here")


// if (listarray.includes(wordfinder)){
//     console.log(`${wordfinder} is on the list`)
// }else{
//     console.log(`${wordfinder} not on the list`)
// }


// // largest number finder- finding the largest nmber in arrayofstudentprofiles

// let numbers = [12, 15, 3, 70]

// let largestnumber = Math.max(...numbers)
// console.log(`the largest number is ${largestnumber}`)

// // duplicate remover from array

// let array = [29, 44, 30, 12, 29, 50]
// let newarray = [...new Set(array)]

// console.log(newarray)

// const allarrays = [1,2,3,4,5]
// reversedarray = allarrays.reverse()


// // WHILE LOOPS

// guessing game: keep prompting a user to guess untill they get it right

// let guessallowed = 2
// let rightguessed = 5
// guesscount = 1

// while (guesscount <= guessallowed){
//     let userguess = window.prompt(`guess a number from 1 - 5, 
//     guesslimit = ${guesscount} of 3 `)
//     userguess = Number(userguess)
  
//     if (userguess === rightguessed){
//         console.log(`right guess, welcome`)
//         break
//     }else if(guessallowed === guesscount){
//         console.log(`gameover`)
//         break
//     }else {
//         userguess = window.alert(`wrong guess, try again`)
//     }
//     guesscount ++

// }


// password validator: keep prompting the user for a password until it meets certain criteria

// let promptallowed = 4
// let password = "adam"
// password = password.toLowerCase()
// limitcount = 1

// while (limitcount <= promptallowed){
//     let userinput = window.prompt(`enter password, (case sensitive) limit : ${limitcount} of ${promptallowed}`)

//     if (userinput === password){
//         console.log(`welcome`)
//         break
//     }else if(promptallowed === limitcount){
//         console.log(`account locked, contact customer support`)
//         break
//     }else{
//         userinput = window.alert(`password incoorect`)
//     }
//     limitcount ++
// }

// // number counter

// function countNumbers(number) {
//     let count = 1;
//     while (count <= number) {
//         console.log(count);
//         count++;
//     }
// }


// // number factor finder

// function findFactors(number) {
//     const factors = [];
//     let i = 1;
//     while (i <= number) {
//         if (number % i === 0) {
//             factors.push(i);
//         }
//         i++;
//     }
//     return factors;
// }






// // MATH object

// // random number generator using math.random()
// let randomnumber = Math.random()
// console.log(randomnumber)


// let y = 3
// let x = 2
// let mathoperation = Math.sqrt(x + y)
// console.log(mathoperation)

// // distance calculator: using pythagoras theorem to carry out operation of distance btw two points

// let a = 2 
// let b = 3 
// let c = Math.sqrt(a **2 + b ** 2 )
// console.log(c)

// // trig calculator of sine tangent and cosine

// let angle = 23
// let sine = Math.sin(angle)
// console.log(sine)

// let cos = Math.cos(angle)
// console.log(cos)

// let tangent = Math.tan(angle)
// console.log(tangent)

// // finance calculator, calculate simple interest, compound and loan payment

// // simple interest
// SI = p * rate * time / 100

// let p = 1200
// let r = 2
// let t = 4
// let SI = 1200 * 2 * 4 / 100
// console.log(SI)

// // compound interest
// A = p(1 + r/n) ** n * t

// let p = 300
// let r = 1
// let n = 4
// let t = 6
// let A = p * Math.pow((1 + r/n), n* t)
// console.log(A.toFixed(2))








// // SECOND ASSIGNMENT

// // /*by calling it using its ID from its HTML element into our js file

// // /*by using queryselectorAll

// // /* we use the firstElementChild property to select the first child element of the parent element.

// // /*by using queryselectorAll

// // /* use the textContent property to set the new text content of the element by assigning it a new value.

// // /*by using the setAttribute()

// // /* by usimg createElement() and appendChild()

// // /* by using the .remove()

// // /* by using parentNode property

// // /* by using the nextElementSibling property

// // /* by using the childNodes property

// // /* by using queryselectorAll

// // /*by using the .style property

// // /* by using the .classlist.remove() then the css classname


// // Function to toggle between styles of element

// function toggleStylesOfElement() {
//     if (element.classList.contains("style1")) {
//         element.classList.remove("style1");
//         element.classList.add("style2");
//     } else {
//         element.classList.remove("style2");
//         element.classList.add("style1");
//     }
// }

// element.addEventlistener("click", toggleStylesOfElement)


// // How can you dynamically create and add a CSS stylesheet to the document?

// // Create a link element
// const cssLink = document.createElement("link");

// // Set attributes for the link element
// cssLink.rel = "stylesheet";
// cssLink.type = "text/css";
// cssLink.href = "styles.css"; // Replace "styles.css" with the path to your CSS file

// // Append the link element to the head of the document
// document.head.appendChild(cssLink);


// // the forEach method in js is used to go over or iterate or go through each item in an array and perform certain action with it for example
// let thisArray = [1,2,3]
// thisArray.forEach(function(number){
//     console.log(number);
// })


// // // differences btw forEach and for loops

// // /*they differ in their syntax

// // variables declared in the call back function of forEach cant be access outside of it while in the for loop the variables can be access outside of the loop

// // //  Write code to double each element in an array using forEach.

// let arrayone = [1,2,3,4]
// arrayone.forEach(function(item){
//     console.log(item * 2);
// })

// // Create a new array containing only strings from a mixed array using forEach.

// const mixedArray = [1, 'apple', true, 'banana', 42, 'orange', false];
// const stringArray = [];

// mixedArray.forEach(function(item) {
//     if (typeof item === 'string') {
//         stringArray.push(item);
//     }
// });

// console.log(stringArray);

// // Filter an array to include only even numbers using forEach.

// const normaldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbersArray = [];

// normaldArray.forEach(function(item) {
//     if (item % 2 === 0) {
//         evenNumbersArray.push(item);
//     }
// });

// console.log(evenNumbersArray);

// // Demonstrate how to access the current index within a forEach callback


// const array = ['a', 'b', 'c', 'd'];

// array.forEach(function(item, index) {
//     console.log(`${index}: ${item}`);
// });

// // Explain how to break out of a forEach loop early


// const array = [1, 2, 3, 4, 5];

// array.forEach(function(item) {
//     if (item === 3) {
//         return; // Exit the loop when item equals 3
//     }
//     console.log(item);
// });


// //  Describe common use cases for forEach in JavaScript applications

// // for iteration, summation and modifications of or over arrays and DOM manipulation

// //  When would you choose forEach over other looping methods?

// // whehn you want to iterate over each element 



// // Explain the syntax and purpose of the for...of loop in JavaScript




// // Iterate over an array of numbers and print their squares using for...of
// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//     const square = num * num;
//     console.log(square);
// }

// // Create a new array containing the string lengths of each element in another array using for...of.


// const strings = ["apple", "banana", "orange", "grape", "kiwi"];

// for (const str of strings) {
//     console.log(`The length of "${str}" is ${str.length}`);
// }

// // Can you modify the original array or object within a for...of loop?

// // yes


// // Describe common use cases for for...of loops in JavaScript applications.

// // can be use to iterate over arrays and strings


// // Write a for loop that prints numbers from 1 to 10.

// for(x = 0; x <= 10; x++)
    
// console.log(x);

// //  Write a for loop that sums all numbers in an array.

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log(sum);

// // Find the largest number in an array using a for loop.


// //  Create a new array containing the squares of numbers in another array using a for loop.

// const numbers = [1, 2, 3, 4, 5];
// const squares = [];

// for (let i = 0; i < numbers.length; i++) {
//     squares.push(numbers[i] ** 2); 
// }

// console.log(squares); 


// //  Break out of a for loop early using the break statement.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let targetNumber = 5;


// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === targetNumber) {
//         console.log(`Found ${targetNumber}`);
        
//         break;
//     }
// }


// //  Continue to the next iteration of a for loop using the continue statement.

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }


// //  Select an element by its ID using getElementById.

// <h1 id="heading">Welcome to my Website</h1>

// let headingElement = document.getElementById("heading")


// //  Select all elements of a specific class name using getElementsByClassName

// <p class="highlight">This paragraph is highlighted.</p>

// <p class="highlight">This paragraph is also highlighted.</p>

// let highlighted = document.getElementsByClassName("highlight")

// // Select the first child element of a given element using firstChild.

// <div id="parent">
//     <p>This is the first child element.</p>
//     <p>This is the second child element.</p>
// </div>

// let parentElement = document.getElementById("parent")
// let childofelement = parentElement.firstChild


// // Select all elements that match a specific CSS selector using querySelector.

// <p class="highlight">This paragraph is highlighted.</p>

// <p class="highlight">This paragraph is also highlighted.</p>

// let highlighted = document.querySelectorAll("highlight")


// // Access the parent element of a given element using parentNode

// <div id="parent">
//     <p>This is a paragraph inside the parent element.</p>
// </div>

//   var childElement = document.querySelector("p");

//    var parentElement = childElement.parentNode;

// //    Access the next sibling element of a given element using nextSibling.

// <div id="parent">
//         <p>This is the first paragraph.</p>
//         <p>This is the second paragraph.</p>



//     var firstParagraph = document.querySelector("#parent p");

//     var nextSibling = firstParagraph.nextSibling;

// //  Iterate over all child elements of a given element using childNodes.

// <div id="parent">
//     <p>This is the first paragraph.</p>
//     <span>This is a span element.</span>
//     <div>This is a div element.</div>
//     <p>This is the last paragraph.</p>
// </div>

// var parentElement = document.getElementById("parent");

//   var childNodes = parentElement.childNodes;

//   for(i = 0; i < childNodes.lenght; x++){
//     let result = childNodes[i]
//   }


//  Explain the difference between childNodes, children, and
// getElementsByTagName.





// Demonstrate how to modify element content (text and attributes) using DOM
// manipulation.

// <div id="example">
//     <p id="text">This is the original text content.</p>
//     <img id="image" src="original.jpg" alt="Original Image">



//     // Select the paragraph element by its ID
//     var paragraph = document.getElementById("text");

//     // Modify the text content of the paragraph
//     paragraph.textContent = "This is the modified text content.";

//     // Select the image element by its ID
//     var image = document.getElementById("image");

//     // Modify the src and alt attributes of the image
//     image.src = "modified.jpg";
//     image.alt = "Modified Image";


// Add a new element to the DOM using createElement and appendChild.

//   var newDiv = document.createElement("div");

//     newDiv.setAttribute("class", "new-div");
//     newDiv.setAttribute("id", "new-div-id");



// Remove an element from the DOM using removeChild.

//     var removeButton = document.getElementById("removeButton");


//     removeButton.addEventListener("click", function() {

//         var paragraphToRemove = document.querySelector("#container p");
        

//         var parentContainer = paragraphToRemove.parentNode;


//         parentContainer.removeChild(paragraphToRemove);
//     });


//     <div id="example" style="background-color: blue; width: 200px; height: 200px;"></div>

//     var element = document.getElementById("example");


//     element.style.backgroundColor = "red";
//     element.style.width = "300px";
//     element.style.height = "300px";

//  Add or remove CSS classes from an element using classList.

//  element.classlist.remove("css classname given to element")



//  Toggle between two different styles for an element using JavaScript.

//      function toggleStyle() {
//         var element = document.getElementById("example");

//         if (element.classList.contains("style1")) {
//             element.classList.remove("style1");
//             element.classList.add("style2");
//         } else {
//             element.classList.remove("style2");
//             element.classList.add("style1");
//         }
//     }



//      Use a for loop to create 10 new paragraph elements and append them to the body of the document.



//  for (var i = 1; i <= 10; i++) {

//         var paragraph = document.createElement("p");
        

//         paragraph.textContent = "Paragraph " + i;
        

//         document.body.appendChild(paragraph);
//     }


//      Use forEach to iterate over all images on a page and add a border to each one.


//     var images = document.querySelectorAll("img");

//     images.forEach(function(image) {

//         image.style.border = "2px solid black";
//     })