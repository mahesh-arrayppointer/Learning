//Write a program to print sum of given first n numbers in C language

let n = 1234, rem = 0, sum = 0;

while( n > 0) {

    rem = n % 10;
    sum = sum + rem;
    n = parseInt(n / 10);

}
console.log("sum",sum);
