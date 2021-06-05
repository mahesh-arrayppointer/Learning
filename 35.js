//Write a program to print following outputs in C language

//* * * * * 
//* * * * 
//* * * 
//* * 
//* 


let n = 5;
let string = "";

for(i=1;i<=n;i++)
{
  for(k=1;k<i;k++)
    {
        string += " ";
    }
  for(j=i;j<=n;j++)
    {
        string += "*";
    }
    string += "\n";
}
console.log(string);
