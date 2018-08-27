// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n){
    if (n==1 || n==2){
        console.log('Value is 1');
        return 1;
    } 
    let curr = 1;
    let back = 1;
    let i
    let currHold;
    for (i = 3; i <= n;i++){
        currHold = curr;
        console.log(currHold);
        curr = curr + back;
        back = currHold;
    }
    console.log(`fibonacci at index ${n} is ${curr}`)
    return curr;
}



// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray){
    noSwaps = false;
    let indexVal;
    let nextIndexVal;
    while(!noSwaps){
       
        noSwaps = true;
        for (i = 0; i< numArray.length-1;i++){
            indexVal = numArray[i];
            nextIndexVal = numArray[i+1];
            if (indexVal > nextIndexVal){
                numArray[i] = nextIndexVal;
                numArray[i+1] = indexVal;
                noSwaps = false;
            }
        }
    }
    return numArray;
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr){
    return someStr.split("").reverse().join("");
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum){
    // Note here for the non-math nerds. factorials of negative numbers should be negative,
    // and 0 should have a factorial of 1. This is not a bug, but a feature.
    someNum = parseInt(someNum);
    let factorialVal = 1;
    if (someNum < 0) {
        factorialVal = -1;
        someNum *= -1;
    }
    while (someNum != 0) {
        factorialVal = factorialVal *someNum;
        someNum --;
    }
    return factorialVal;
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset){
    if (typeof someStr !== 'string'){
        window.alert("substring must be passed a string")
        return;
    } else if(typeof length !== 'number' || length < 0) {
       window.alert("length must be positive, and a number.");
    } else if(typeof offset !== 'number' || offset < 0) {
        window.alert("offset must be positive, and a number.");
    }
    let returnVal = someStr;
return returnVal.split("").slice(offset,length+offset+1).join("");
}
// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){
    if (someNum != parseInt(someNum)) {
        return false;
    }
    if (someNum < 0) {
        someNum *= -1;
    }
    while(someNum > 1){
        someNum -= 2;
    }

    if(someNum === 0){
        return true;
    } else {
        return false;
    }
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
    let start;
    let end;
    if (someStr.length % 2 === 0){
        let start = substring(someStr,(someStr.length/2)-1,0);
        console.log(start);
        let end = substring(someStr,(someStr.length/2)-1,someStr.length/2);
        console.log(end);
    } else{
        let start = substring(someStr,((someStr.length-1)/2)-1,0);
        console.log(start);
        let end = substring(someStr,((someStr.length-1)/2)-1,someStr.length/2);
        console.log(end);
    }
    if (start == end){
        return true;
    } else {
        return false;
    }
}
console.log(substring('aaaaa',2,0));
console.log(substring('aaaaa',2,0));
console.log(isPalindrome('aaaaaa'));
console.log(isPalindrome('aaaaa'));
console.log(isPalindrome('baaaa'));
console.log(isPalindrome('a'));
console.log(isPalindrome(''));
console.log(isPalindrome('adertrgtrytgreaaa'));

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape,height,character){
     let printRow = [];
    if(typeof height !== "number"||height <1){
        console.log('height must be a positive number');
    }
    if(typeof character !== 'string'){
        console.log('character must be a character...duh.');
    }
    switch (shape){
        case "Square":
        for (i = 1; i <= height;i++){
            printRow.push(character);
        }
        output = printRow.join('');
        for (i= 1; i <= height; i++){
            console.log(output);
        }
        break;
        case "Triangle":
        for (i = 1; i<=height; i++){
            printRow.push(character);
            output = printRow.join('');
            console.log(output);
        }
        break;
        case "Diamond":
        let printSpace = [];
        let thisLine = [];
        for(i = 1; i<= (height-1)/2;i++){
            printSpace.push(' ');
        }
        printRow.push(character);
        for (i = 1; i<= (height-1)/2; i++) {
            thisLine.push(printSpace.join(''));
            thisLine.push(printRow.join(''));
            thisLine.push(printSpace.join(''));
            console.log(thisLine.join(''));
            printRow.push(character);
            printRow.push(character);
            printSpace.pop();
            thisLine = [];
        }
        console.log(printRow.join(''));
        for (i = 1; i<= (height-1)/2; i++) {
            printRow.pop();
            printRow.pop();
            printSpace.push(' ');
            thisLine.push(printSpace.join(''));
            thisLine.push(printRow.join(''));
            thisLine.push(printSpace.join(''));
            console.log(thisLine.join(''));
            thisLine = [];
        }
        break;
    }
}


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){
    for(prop in someObj){
        console.log(`The value of ${someObj}'s property ${prop} is ${someObj[prop]}`);
    }
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArray){
    console.log(someArray.length);
    delete someArray[2];
    console.log(someArray.length);
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArray){
    console.log(someArray.length);
    someArray.splice(2,1);
    console.log(someArray.length);
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function Person(name, age){
    this.name = name;
    this.age = age;
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
 function getPerson(litName, litAge){
     let Person = {
        name: litName,
        age: litAge
     }
     return Person;
 }
 
 
 
 
// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
console.log(document.querySelector('[data-customAttr= "USA"]'))
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales(){
let employeeNames = document.getElementsByClassName("empName");
for (let emp of employeeNames) {
    console.log(emp.innerHTML);
}
}
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren(){
    let anchorList = document.getElementsByTagName("a");
    for (let i = 0; i< anchorList.length;i++){
        anchorSpans = anchorList[i].getElementsByTagName("span");
        if (anchorSpans[0]){
            for (let j = 0; j <anchorSpans.length;j++){
                console.log(anchorSpans[j].innerHTML);
            }
        }
    }
    }
  
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies(){
    let skills = document.getElementsByName("skills");
    for (let i = 0; i<skills[0].length;i++){
        if (skills[0][i]["selected"]){
            console.log(`Skill value is ${skills[0][i].value} and the contents are ${skills[0][i].innerHTML}`)
        }
    }
    }
  
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute(){
    let customElements = document.querySelectorAll(`[data-customAttr]`)
    for (i = 0; i<customElements.length; i++){
        console.log(customElements[i].attributes[`data-customAttr`]);
        console.log(customElements[i]);
    }
}


// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>


// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sum = document.getElementById("sum");
num1.addEventListener("keyup",sumUpdate);
num2.addEventListener("keyup",sumUpdate);
function sumUpdate(){
   let sumNum = parseFloat(num1.value) +parseFloat(num2.value);
   console.log(sum);
   sum.innerHTML = sumNum;
}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
let skill = document.getElementsByName("skills")[0];
   skill.addEventListener("change",checkSkill);
function checkSkill(){
    for (let i=0; i<skill.children.length;i ++){
        if (skill.children[i]["selected"]){    
        alert(`Are you sure that ${skill.children[i].innerHTML} is one of your skills?`)
        }
    }
}
// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
let favoriteColor;
colorOps = document.getElementsByName("favoriteColor");
for (let i=0; i<colorOps.length; i++){
    colorOps[i].addEventListener("click",() => {
                if (favoriteColor && favoriteColor !== colorOps[i].value){
                    alert(`So you like ${colorOps[i].value} more than ${favoriteColor} now?`);
                }
                favoriteColor = colorOps[i].value;
            }
    );
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
empNames = document.getElementsByClassName("empName");
for (let i = 0; i<empNames.length; i++){
    let currEmp= empNames[i]
    currEmp.addEventListener('mouseover',()=> {
        if(currEmp.style.color === "white"){
            currEmp.style.color = 'black';
        } else{
            currEmp.style.color = 'white';
        }
    })
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
var timer = setInterval(()=>{
    let d = new Date();
    hour = d.getHours();
    if(hour>0 && hour<12){
        document.getElementById("currentTime").innerHTML = hour +":" + d.getMinutes() +":"+ d.getSeconds()+"AM";
    } else if (hour>= 12){
        document.getElementById("currentTime").innerHTML = parseInt(hour)-12 +":" + d.getMinutes() +":"+ d.getSeconds()+"PM";
    } else {
        document.getElementById("currentTime").innerHTML = "12:" + d.getMinutes()+":"+d.getSeconds()+"AM";
    }
},500);
// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
document.getElementById("helloWorld").addEventListener("click", ()=>{
    setTimeout(()=>{
        let color = 'rgb('+ (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ',' +  (Math.floor(Math.random()*256)) + ')';
        document.getElementById("helloWorld").style.color = color;
    },3000);
});

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node)
function walkTheDOM(node,func){
   let travDirection= "sibling";
}
   function func(node){
       console.log(`Traversing node ${node} coming from ${travDirection}`)
       if (travDirection !== "child"){
           if (node.childNodes[0]){
               travDirection = "parent";
               func(node.childNodes[0]);
           }
         } if (node.nextSibling){
               travDirection = "sibling";
               func(node.nextSibling);
           } else if (node.parentNode){
                   travDirection = 'child';
                    func(node.parentNode);
               } else{ 
                return;}
           }
        
       
   
