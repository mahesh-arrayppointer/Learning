//Write a program to accept a number from user and print if it is prime or not in C language

let i, n = 37;

for (i = 2; i <= n / 2; i++) {

    if (n % i == 0) {

        console.log("Not Prime");
        return
    } 

}
console.log("Prime ");
