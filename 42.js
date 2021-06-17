//Write a program to print following outputs in C language

// A
// BBB
// CCCCC
// DDDDDDD


let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode((i - 1) + 65);
  }
  string += "\n";
}
console.log(string);