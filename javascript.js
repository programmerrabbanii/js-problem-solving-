// 1. 
let carName='volvo';

// 2 
`fristName,lastName,age="john","Doe","35"`;

// 3

let x=10;
let y=5

let total= x*y;
// console.log(total)

// 4

let length=16;
let lastName='josnhon'

console.log( typeof length)
console.log( typeof lastName)

let person={
    fristName:'john',
    lastName:'doe',
}
console.log(typeof person)

// 5

let functionOne=function myFuction(){
    alert('hello world')
}


// 6. Create an object called person 

  let personOne={
    name:'john',
    age:50
  }
  alert(personOne.name+'is'+ personOne.age )

//   7

// js onclick 

// 8
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length)

const Brand = ["Volvo", "Jeep", "Mercedes"]; 
Brand[0]='ford'

// 9
const number=Math.random();
console.log(number)

const number2=Math.max(10,20);
console.log(number2)

let result=Math.sqrt(9);
console.log(result)

// 10

let num1=10;
let num2=5;

const text= num1 > num2;

let age=16;
alert( age >18? 'to young': 'Old enough')

// JavaScript Basic Problem Solving  PART 2 
// 1
function celsiusToFahrenheit(celsius) {
    return celsius *9/5 +32 ;

  }
  
  console.log(celsiusToFahrenheit(0)); 
  console.log(celsiusToFahrenheit(25)); 

//   2
function isEven(num) {
    return num % 2 ===0; 
  }
  
  console.log(isEven(4)); 
  console.log(isEven(7)); 
//   3

function sum(a, b) {
    return a+ b;
  }
  
  console.log(sum(3, 4)); 
  console.log(sum(10, 20)); 
//   4
function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); 
  console.log(findSmallestNum([-1, -5, 0, 10])); 
//   5

function countVowels(str) {
    let vowels = 'aeiouAEIOU';

    return str.split('').reduce((count, char) => {
        return vowels.includes(char) ? count + 1 : count;
      }, 0);
    }
  console.log(countVowels("hello world")); 
  console.log(countVowels("Javascript")); 

//   6

function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); 
  console.log(getFirstElement(["a", "b", "c"])); 
//   7

function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); 
  console.log(isArrayEmpty([1, 2, 3])); 
  
  
// 8
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num-1);
  }
  
  console.log(factorialize(5)); 
  console.log(factorialize(7)); 
//   9

function reverseString(str) {
    return str.split('').reverse().join();
  }
  
  console.log(reverseString("hello"));
  console.log(reverseString("world")); 
// 10

function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); 
  console.log(toLowerCase("JavaScript")); 
//   11

function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); 
  console.log(stringLength("world"));

//   12
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
  console.log(mergeArrays(["a", "b"], ["c", "d"])); 
//   13
function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  
  console.log(getLastElement([1, 2, 3])); 
  console.log(getLastElement(["a", "b", "c"])); 
//   14
function getFirstCharacter(str) {
    return str[0];
  }
  
  console.log(getFirstCharacter("hello")); 
  console.log(getFirstCharacter("world")); 

//   15

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num , 0);
  }
  
  console.log(sumArray([1, 2, 3, 4])); 
  console.log(sumArray([-1, -2, -3, -4])); 
  console.log(sumArray([1.5, 2.5, 3.5])); 
  


  



















