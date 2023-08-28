// 1. Ways to print in javascipt.
// console.log("Hello world");
// alert("me");
// document.write("this is document write");

// 2. This is javascript console API(Appication programing interface).      
// console.log("Hello world", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");

// 3. Javascript Variables.
// what are variables? - Containers to store data values.
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in Javascript
// Numbers
var num1 = 455;
var num2= 56.76;

// String
var str1 = "This is a string";
var str2 = "This is also a string";

//Objects
var marks = {
    ravi: 34,
    shubham : 78,
    harry: 99.977 
}

// console.log(num1);
// console.log(num2);
// console.log(str1);
// console.log(str2);
// console.log(marks);

// Booleans

var a = true;
var b = false;
// console.log(a);
// console.log(b)
// console.log(a,b);

// var und = undefined;
var und;
// console.log(und);

var n= null;
// console.log(n);

/*
At a very high level. there are two types of 
dataytpes in javascript
1. Pirmitive data types: undefined, null, number, string, boolean, symbol.
2. Referance data types: Arrays and Objects
*/

var arr = [1,2, "string",3,4];   // We also use string...
// console.log(arr);

//  Operators in Javascript
//  They are Arithmetic Operators
var a =100;
var b= 10;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The value of a / b is", a/b);

//  Assignment Operator
var c = b;
// c += 2;  
//c -= 2;    // c = c -2;
// c *= 2;
// c /= 2;
// console.log(c);

//  Comparison Operator
var x = 34;
var y = 56;
//  console.log(x==y); 
//  console.log(x>=y);
//  console.log(x<=y);
//  console.log(x>y);
//  console.log(x<y);

// Logical Operators

//  Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical not
// console.log(!false);
// console.log(!true);

// Function in Javascript

function avg(a, b){
    c = (a+b)/2;
    return c;    
}

// DRY(Principal) = Do Not Repeat Yourself.

c1 = avg(4,6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditional In Javascript

// var age = 20;

//  single if statement

// if(age > 18 ){
//     console.log("you can drink alcohol");
// }

// if - else statement

var age = 36;

// if(age > 18 ){
//     console.log("you can drink alcohol");
// }
// else{
//     console.log("you cannot drink alcohol");
// }

// if-else ladder
 
var age = 30;
/*
if(age>32){
    console.log("you are not a kid");
}
else if(age>26){
    console.log("Bacche nahi rahe");
}
else if(age>22){
    console.log("Yes, Bacche nahi rahe");
}
else if(age>18){
    console.log("18 Bacche nahi rahe");
}
else{
    console.log("Bacche rahe");
}
console.log("End of ladder");
*/

// prompt("Enter your age:");
// if(age>18){
//     console.log("You can drink rasna");
// }
// else{
//     console.log("you cannot drink rasna");
// }

// for loop....

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// forEach loop....

// arr.forEach(function(element){
//     console.log(element);
// })

// while loop...

// const ac = 0;
// ac++;
// ac= ac+1;
let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length)

// Break and Continue Statement...

// for(var i=0;i<arr.length;i++){
    //  if(i==2){
        //  break;
        // continue;
    //  }
//     console.log(arr[i]);
// }

let myArr = ["fan", "camera", 34, null, true];
// Array Methods

// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry");
// myArr.shift();
// myArr.unshift("harry");
// console.log(myArr.unshift("harry"));
// const newlen = myArr.unshift("harry");
// console.log(newlen);
// console.log(myArr);

// String Methods in Javascript...
let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));

// console.log(myLovelyString.slice(0, 3));
// d = myLovelyString.replace("Harry", "Rohan");
// d= d.replace("good", "bad");
// console.log(d, myLovelyString);

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM(Document Object Model) Manupilation....

let elem = document.getElementById('click');
// console.log(elem);

let elemclass = document.getElementsByClassName('container');
// console.log(elemclass);
// elemclass[0].style.background = "yellow";
// elemclass[1].style.background = "pink";
elemclass[0].classList.add("bg-primary"); 
elemclass[0].classList.add("text-success");
// elemclass[0].classList.remove("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText)

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

// tn = document.getElementsByTagName("button");
// console.log(tn);

tn = document.getElementsByTagName("div");
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removechild(element); ----> removes an element

// Selecting using query 

// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel); 

// function clicked(){
//     console.log("The button was clicked");
// }

// function clicked(){
//     console.log("The button was clicked");
// }

// window.onload = function(){
//     console.log("The document was loaded");
// }

// Event in Javascript

// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>";
//     console.log("clicked on container");
// })

// firstcontainer.addEventListener('mouseover', function(){
//     console.log("Mouse on container");
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of container");
// })

// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
 
// summ = (a, b)=>{
//     return a+b;
// }  

// logkaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> set Timeout fired</b>";
//     console.log("I am your log");
// }

// SetTimeout and setinterval.... 

// clr = setTimeout(logkaro, 2000);
// clr = setInterval(logkaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout 

// Javascript LocalStorage

// localStorage.setItem('name', 'harry');
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// Json 

// obj = {name: 'harry', length: 1}
// jso = JSON.stringify(obj);
// console.log(typeof jso); 
// console.log(jso); 
// parsed = JSON.parse(`{"name: "harry", "length": 1, "a": {"this": "that"}}`);
// console.log(parsed);

//Template literals - Backticks

a= 34;
// console.log(`This is my log ${a}`);