// let a = 3; // number = integer + float
// let b = 2; //
// let b1; // undefined
// let c = "a"; // character
// let d = true; // boolean

// a = 4; // assignment
// a + 3; // addition
// a - b;
// a * b;
// a / b; //division is float
// a % b; // 5 % 2 = 1; 10 % 4 = 2
// a += 4; // equivalent a = a + 4;
// a -= b;
// a *= b;
// a /= b;
// a %= b;
// a++; // a = a + 1 or a += 1
// a--;
// c + "b"; // concatenation, will discuss in String

// a == b; // LOGIC "="
// a === b; // LOGIC "is the same as" === same type and same value
// 1 == "1"; // true
// 1 === "1"; // false

// a > b;
// a < b;
// a >= b;
// a <= b;

// a && b; // Logic "AND": return true when a == true and b == true
// a || b; // Logic "OR": return true when either a == true or b == true
// // 0, 0.0 == false.

// // Flow Control
// // if-else and switch-case: Conditional flow //
// if (a == 3) console.log("a is 3");
// if (a % 2 == 0) console.log("a is even");
// else console.log("a is odd");

// if (a > 1) console.log("more than 1");
// else if (a < 1) console.log("less than 1");
// else console.log("a == 1");

// if (a == 3) {
//   console.log(a * 3);
//   console.log(a - 3);
// }

// switch (a) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   default:
//     console.log("not in range");
//     break;
// }

// for (let i = 0; i < 5; i++) console.log(i); // in ra 0 -> 4

// a = 3;
// while (a < 5) {
//     console.log(a);
//     a++;
// }

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// for (; a < 10;) {
//     console.log(a);
//     a++;
// }

// Iterables, Functions, Object, DOM Manipulation

//Iterables

// Array
let arr = [1, 2, 3];
console.log(arr[1]); // print out 2

let earr = [];
console.log(earr);
earr.push(1); // arr = [1]
earr.push(2); // arr = [1, 2]
earr.unshift(3); // arr  = [3, 1, 2]
console.log(earr);
let last = earr.pop(); // last = 2
let first = earr.shift(); // first = 3

for (number of arr) console.log(number);

let oarr = [];
oarr.push(1);
oarr.push("Fruit");
for (obj of oarr) console.log(obj);
// String
let s = "Duc";
// s = ['D', 'u', 'c']
s = s + " Ho"; // concatenation
console.log(s);
console.log(s[1]);
s[0] = "d";
console.log(s);
for (char of s) console.log(char);

// Function

let aArray = [1, 2, 3];
let bArray = [2, 3, 4];
let cArray = [10, 11, 12];
// let sumA = 0;
// for (let i = 0; i < 3; ++i) sumA += aArray[i];
// console.log(sumA);

// let sumB = 0;
// for (let i = 0; i < 3; ++i) sumB += bArray[i];
// console.log(sumB);

// let sumC = 0;
// for (let i = 0; i < 3; ++i) sumC += cArray[i];
// console.log(sumC);
// camelCase naming
let sumOfAnArray = (anArray) => {
  let sum = 0;
  for (element of anArray) sum += element;
  return sum;
};

console.log(sumOfAnArray(aArray));
console.log(sumOfAnArray(bArray));
console.log(sumOfAnArray(cArray));

let someNumber = 5;
let double = (x) => 2 * x;
console.log(double(someNumber));
// y = f(x) hay f(x) = y

// Object

// Property
// Method

let dog = {
  legs: 4,
  sound: "Woof",
  bark() {
    console.log(this.sound);
  },
};

dog.bark();

let blogDiv = document.getElementsByClassName("blog"); // Array of HTML Element
blogDiv[0].style.border = "1px solid black";
blogDiv[0].style.padding = "4rem";

let another = document.querySelector("div.blog");
console.log(another);
another.style.backgroundColor = "teal";
another.style.color = "white";

let title = (document.getElementsByTagName("h1")[0].innerText =
  "Replaced title");

let newPara = document.createElement("p");
let newText = document.createTextNode("Lorem ipsum donor bla bla");
newPara.appendChild(newText);
another.appendChild(newPara);

let btn = document.querySelector("button");
btn.onclick = () => {
  another.style.backgroundColor == "indigo"
    ? (another.style.backgroundColor = "teal")
    : (another.style.backgroundColor = "indigo");
};
