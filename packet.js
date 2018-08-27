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
 