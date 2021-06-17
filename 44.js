//Write a program to print following outputs in C language

// 1
// 11
// 121
// 1231
// 12341
// 123451

let n = 5;
let string = "";

for(i=0;i<=n;i++)
  {
    for(j=1;j<=i;j++)
    {
        string += j;
    }
    string +="1\n";
  }
  console.log(string);