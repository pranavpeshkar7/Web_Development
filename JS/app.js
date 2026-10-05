// let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

// for(let i=0;i<heroes.length;i++){
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }

// alert("Something is wrong!");
// console.error("Error");
// console.warn("Warning");

// let firstName = prompt("Enter your first name:")
// let lastName = prompt("Enter your last name:")
// let str = "Welcome "+firstName+" "+lastName + "!";
// alert(str);

// let msg = "    hello   ";
// let newMsg = msg.trim();
// console.log("After trim:", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("After Uppercase:", newMsg);
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// let password = prompt("Enter your password");
// let newPassword = password.trim();
// console.log(newPassword);

// let size = "XL";

// if (size = "XL"){
//     console.log("Price is 250rs.")
// }
// else if (size = "L"){
//     console.log("Price is 200rs");
// }
// else if(size = "M"){
//     console.log("Price is 100rs");
// }
// else{
//     console.log("Price is 50rs")
// }

// let marks = 91;

// if (marks>=90){
//     console.log("Grade : A");
// }
// else if (marks>=70){
//     console.log("Grade : B");
// }
// else if (marks>=50){
//     console.log("Grade : C");
// }
// else if (marks>=35){
//     console.log("Grade : D");
// }
// else{
//     console.log("Fail");
// }
// let str = "hello";

// if (str[0]==="a" && str.length>3){
//     console.log(`${str} is a good string`);
// } else{
//     console.log(`${str} is not a good string`);
// }

// let day = 1;

// switch(day){
//     case 1: console.log("Monday");
//     break;
//     case 2: console.log("Tuesday");
//     break;
//     case 3: console.log("Wednesday");
//     break;
//     case 4: console.log("Thursday");
//     break;
//     case 5: console.log("Friday");
//     break;
//     case 6: console.log("Saturday");
//     break;
//     case 7: console.log("Sunday");
//     break;
//     default: console.log("Wrong number!");
// }

// let arr = [7,9,0,-2];
// arr.splice(3,1);
// console.log(arr);

// let arr = [7,9,0,-2];
// arr.splice(0,1);
// console.log(arr);

// let str = "hello";
// if(str.length==0){
//     console.log("The string is null.");
// }
// else{
//     console.log(str);
// }

// let str = "hello";
// let idx = 3;

// if(str[idx]==str[idx].toLowerCase()){
//     console.log("Character is in lower case");
// }
// else{
//     console.log("Character is not in lower case");
// }

// let str = "    hello    ";
// console.log(str.trim());

// let arr = [2,3,4,5];
// let item = 7;
// if(arr.indexOf(item)==-1){
//     console.log("element is not present");
// }
// else{
//     console.log(item);
// }

// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }

// console.log("Backwards");

// for(let i=15;1<=i;i=i-2){
//     console.log(i);
// }

// for(let i=2;i<=10;i=i+2){
//     console.log(i);
// }

// console.log("Backwards");

// for(let i=10;i>=2;i=i-2){
//     console.log(i);
// }

// let n = prompt("Enter the number:");
// n = parseInt(n);

// for(i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

// for(let i=1;i<=3;i++){
//     console.log("Outer Loop : "+i);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let favMovie = "Infinity Castle";
// let guess = prompt("Guess the movie");
// while(guess!=favMovie){
//     if(guess=="quit"){
//         break;
//     }
//     guess = prompt("Wrong answer. Try Again!");
// }
// if(favMovie==guess){
//     console.log("Congrates");
// }
// else{
//     console.log("you quit");
// }

// let fruits = ["mango","apple","banana","litchi","orange"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i, fruits[i]);
// }

// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i, fruits[i]);
// }

// let num = 20;

// if(num%10==0){
//     console.log("Good Number!");
// }
// else{
//     console.log("Bad Number")
// }

// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// console.log(name+" is "+age+" years old.");

// let quarter = 1;

// switch(quarter){
//     case 1: console.log("January, February, March");
//         break;
//     case 2: console.log("April,May,June");
//         break;
//     case 3: console.log("July,August,September");
//         break;
//     case 4: console.log("October,November,December");
//         break;
//     default: console.log("Wrong Quater");
// }

// let str = "Amaritsar";

// if((str[0]="a"||"A") && (str.length>5)){
//     console.log("Golden String");
// }

// let a = 2;
// let b = 3;
// let c = 5;

// if(a>b && a>c){
//     console.log(a);
// }
// else if(b>a && b>c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }

// num1 = 32;
// num2 = 43;

// if((num1%10)==(num2%10)){
//     console.log("Numbers have same last digit.");
// }
// else{
//     console.log("Numbers do not have same last digit.");
// }

//object literals

// let delhi = {
//     latitude:"28.7041 N",
//     longitude: "77.1025 E"
// };

// let student = {
//     name:"pranav",
//     age:23,
//     marks:99,
//     city:"Akola"
// };

// const item = {
//     price: 100,
//     discount: 50,
//     colors: ["red","pink"]
// };

// let post = {
//     username: "@pranavpeshkar7",
//     content: "This is my #firstPost",
//     likes: 100,
//     reposts: 5,
//     tags: ["@apnacollege","@delta"]
// };

// const classInfo = {
//     aman:{
//         grade: "A+",
//         city: "Delhi"
//     },
//     pranav:{
//         grade: "A++",
//         city: "Akola"
//     },
//     shripad:{
//         grade: "",
//         city: "Pune"
//     }
// };

// const classInfo = [
//     {
//         name:"aman",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "shradha",
//         grade: "A",
//         city: "Pune"
//     },
//     {
//         name: "karan",
//         grade: "O",
//         city: "Mumbai"
//     }
// ];

//random integers

// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// num++;

// let random = Math.floor(Math.random()*10)+1;

// let dice = Math.floor(Math.random()*6)+1;

// let carShowRoom = {
//     name: "bmw",
//     model: "Series 2",
//     color: "red"
// };

// let Person = {
//     name: "Pranav Peshkar",
//     age: "22",
//     city: "Pune"
// };

// function hello(){
//     console.log("hello");
// }

// function printPoem(){
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder who you are");
// }

// function rollDice(){
//     console.log(Math.floor(Math.random() * 6)+1);
// }

// function printInfo(name,age){
//     console.log(`${name} age is ${age}`);
// }

// function calcAvg(a,b,c){
//     let avg = (a+b+c) / 3;
//     console.log(avg);
// }

// function printTable(num){
//     for(let i=num; i<=num*10; i = i + num){
//         console.log(i);
//     }
// }

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(sum(1,2),3));

// function isAdult(age){
//     if(age > 18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
// }

// function getSum(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }

// let arr = ["hi","hello","bye","!"];

// function concatString(arr){
//     let result = "";
//     for(let i=0; i<arr.length; i++){
//         result += arr[i];
//     }
//     return result;
// }

// console.log(concatString(arr));

//lexical scope
// function outerFunc(){
//     function innerFunc(){
//         console.log(x); //possible through concept of hoisting.
//     }
//     let x = 5;
//     let y = 6; 
//     innerFunc();
// }

// outerFunc();

//function expression 

// let sum = function (a,b){
//     return a+b;
// }

// sum = function (a,b,c){
//     return a+b+c;
// }

//Higher Order Function
// function multipleGreet(func, count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }

// // multipleGreet(greet, 10);
// multipleGreet(function(){console.log("namste")}, 1000);

// function oddEvenTest(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }else if(request == "even"){
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     }else{
//         console.log("wrong request");
//     }
// }

// let request = "odd";

//Methods

// const calculator = {
//     num : 55,
//     add: function(a, b){
//         return a+b;
//     },
//     sub: function(a, b){
//         return a-b;
//     },
//     mul: function(a, b){
//         return a*b;
//     }
// };

// const calculator = {
//     num : 55,
//     add(a, b){
//         return a+b;
//     },
//     sub(a, b){
//         return a-b;
//     },
//     mul(a, b){
//         return a*b;
//     }
// };

//assign 6
// function maxElement(arr){
//     let max = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let arr = [2,1,9,7,3,4];
// console.log(maxElement(arr));

// function extractChar(str){
//     let newStr = "";
//     for(let i=0; i<str.length; i++){       
//         if(!newStr.includes(str[i])){
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

// let str = "abcdabcdefgggh";
// console.log(extractChar(str));

// function longCountryName(str){
//     let max = str[0].length;
//     let idx = 0;
//     for(let i=1; i<str.length; i++){
//         if(str[i].length > max){
//             max = str[i].length;
//             idx = i;
//         }
//     }
//     return str[idx];
// }

// let str = ["Australia","Germany","United States of America"];
// console.log(longCountryName(str));

// let str = "aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou";

// function countVowels(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels(str));

// function randomNumberRange(start,end){
//     let diff = end - start;
//     return Math.floor(Math.random() * diff) + start;
// }

// console.log(randomNumberRange(10,30));

// const student = {
//     name: "pranav",
//     age: 22,
//     eng: 98,
//     math: 95,
//     phy: 97,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks ${avg}`);
//     }
// };

// function getAvg(){
//     console.log(this);
// }


// Exception Handling

// console.log("hello");
// console.log("hello");
// console.log("hello");
// // console.log(a);
// try{
//     console.log(a);
// }catch(err){
//     console.log(err);
//     // console.log("caught an error... a is not defined");
// }
// console.log("hello");
// console.log("hello");

// Arrow Functions

// const sum = (a,b) => {
//     console.log(a+b);
// }

// const cube = (a) => {
//     console.log(a*a*a);
// }

// const pow = (a,b) => {
//     return a**b;
// }

// Implicit return
// const mul = (a,b) => (a * b);
// const add = (a,b) => (a + b);
// const cube = (a) => a*a*a;

// console.log("hi there!");

// setTimeout( () => {
//     console.log("Apna College")
// }, 4000);

// let id = setInterval( () => {
//     console.log("Apna College")
// }, 2000);

// console.log(id);

// clearInterval(id);

// console.log("Welcome to");

//Functions(this keyword)

// Arrow func() - refers to parent function(Lexical Scope)
// Normal func() - this(calling object) normal function scope

// const student = {
//     name: "pranav",
//     marks: 96,
//     prop: this, //global scope
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks:() => {
//         console.log(this); //parent's scope -> window
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout(() => {
//             console.log(this)
//         }, 2000);
//     },
//     getInfo2: function() {
//         setTimeout(function() {
//             console.log(this)
//         } ,2000);
//     }
// };

// const square = (n) => n*n;

// let id = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval ran ")
// }, 10000);

// let arrayAverage = (arr) => {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }

// let arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(arrayAverage(arr));

// const Even = (n) => n % 2 == 0;

// let length = 4;

// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(callback){
//         callback();
//     },
// };

// object.method(callback, 1, 2);

// console.log(window.length);

// Array Methods 

// let arr = [1,2,3,4,5];

// let print = function (el){
//     console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function (el){
//     console.log(el);
// })

// arr.forEach((el) => {
//     console.log(el);
// })

// let arr = [{
//     name: "pranav",
//     marks: 95
// }, {
//     name: "shiva",
//     marks: 99
// }, {
//     name: "nikhil",
//     marks: 97
// }]

// let gpa = arr.map( (el => {
//     return el.marks / 10;
// }));

// arr.forEach((student) => {
//     console.log(student.marks);
// })

// let num = [1,2,3,4];

// let double = num.map((el) => {
//     return el*2;
// });

// let double = num.map((el) => {});

// Filter

// let nums = [1,2,3,4,5,6,7,8,9,10];

// let ans = nums.filter((el) => {
//     return !(el % 2 == 0);
// })

// Every

// let nums = [10,20,30,40,50];
// let ans = nums.every((el) => el % 10 == 0);

// Reduce

// let nums = [1,2,3,4];

// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res+el;
// });
// console.log(finalVal);

// let arr = [1,4,73,7,77,6,3,5,2,5,7,8,9];

// let max = arr.reduce((max, el) => {
//     if(max < el){
//         return el;
//     }else{
//         return max;
//     }
// }); 

// let min = arr.reduce((min, el) => {
//     if(min < el){
//         return min;
//     }else{
//         return el;
//     }
// });

//Default Parameters

// function sum(a, b = 3){
//     return a+b;
// }

// sum(2);

//spread -> expands an iterable into multiple values

// let arr = [1,2,3,4,5];

// let newArr = [...arr];

// let chars = [..."pranav"];

// let even = [2,4,6,8,10];
// let odd = [1,3,5,7,9];

// let nums = [...even, ...odd];

// let data = {
//     email: "ironman@gmail.com",
//     password: "abcd"
// };

// const dataCopy = {...data, id: 123, country: "ironman"};

// let obj1 = {...arr};

// let obj2 = {..."hello"};

//Rest

// function sum(...args){
//     for(let i=0; i<args.length; i++){
//         console.log("you gave us:",args[i]);
//     }
// }

// function min(a,b,c,d){
//     console.log(arguments.length); 
// }

// function sum(...args){
//     return args.reduce((sum, el) => sum + el);
// }

// function min(msg, ...args){
//     console.log(msg);
//     return args.reduce((min, el) => {
//         if(min > el){
//             return el;
//         }else{
//             return min;
//         }
//     });
// }

//Destructuring

// let names = ["tony","bruce","steve","peter"];
// let [winner, runnerup, ...others] = names;
// console.log(winner, runnerup);

// const student = {
//     name: "pranav",
//     age: 14,
//     class: 9,
//     subjects: ["hind","english","math","science"],
//     username: "pranav@134",
//     password: "abcd",
//     city: "Akola"
// }

// let username = student.username;
// let password = student.password;

//using objects

// let {username, password} = student; 
// let {username: user, password: secret, city : place = "Mumbai"} = student; 

// let arr = [1,2,3,4,5];

// let squareAndSum = arr.reduce((ans, el) => {
//     const square = arr.map(ans + (el*el));
//     console.log(square);
//     let sum = ans + el; 
//     return (sum/arr.length);
// });

// let squareAndSum = function(){
//     const square = arr.map((num) => (num*num));
//     console.log(square);
//     let sum = square.reduce((acc, cur) => acc+cur, 0);
//     let avg = sum / arr.length;
//     console.log(avg);
// }

// let ans = arr.map((el) => {
//     return el + 5;
// })

// console.log(arr.map((num) => num + 5));

// let str = ['tony','bruce','steve','peter'];

// let newArr = str.map((el) => {
//     return el.toUpperCase();
// })

// console.log(str.map((str) => str.toUpperCase()));

// let arr = [2,4,6,8,10];

// function doubleAndReturnArgs(arr, ...args){
//     return newArr = [...arr, args];
// }

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr, ...args.map((v) => v*2)
// ];

// let obj1 = {
//     name: "pranav",
//     age: 22
// };

// let obj2 = {
//     class: "BE",
//     college: "KSE"
// };

// // function mergeObjects(obj1, obj2){
// //     return obj = {...obj1, obj2};
// // }

// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
// mergeObjects(obj1, obj2);


