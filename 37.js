//Write a program to print following outputs in C language

//       *
//     * * *
//   * * * * *
//  * * * * * * *
//* * * * * * * * *


let n = 5, i , j, k;
let string = "";

for(i=1;i<=n;i++)
  {
    for(k=1;k<=(n-i);k++)
      {
       string+=" ";
      }
    for(j=1;j<=i;j++)
      {
        string+="*";
      }
    for(j=2;j<=i;j++)
      {
        string+="*";
      }
      string+="\n";
  }
console.log(string);
