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
        