let aNumber = 103;
// Cau truc dieu kien // re nhanh // Conditionals

aNumber += 1;
if (aNumber === 103) console.log("okay");
else if (aNumber % 2 === 0) console.log("an even number");
else console.log("an odd number");

console.log(aNumber);

switch (aNumber) {
  case "a" /*97*/:
    console.log("one");
    break;
  case "b":
    console.log("two");
    break;
  case "c":
    console.log("three");
    break;
  case "d":
    console.log("four");
    break;
  default:
    console.log("Not Applicable");
    break;
}

for (let i = 0; i < 10; i += 2) {
  console.log(`Happy New Year for ${i} times!`);
  console.log("Something!");
}

while (aNumber > 100) {
  console.log(aNumber);
  aNumber -= 1;
}
