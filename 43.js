//Write a program to print following outputs in C language

// ABCDEEDCBA
// ABCD  DCBA
// ABC    CBA
// AB      BA
// A        A

let n = 5;
let string = "";
for(let i=n-1;i>=0;i--)
{
  for(let j=0;j<=i;j++)
  string += String.fromCharCode(65+j);
  for(let k=1;k<(n-i);k++)
  string +="  ";
  for(let j=i;j>=0;j--)
    string += String.fromCharCode(65+j);

    string +="\n";
}
console.log(string)