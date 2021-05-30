
let n = 1234, rem = 0;

while( n > 0) {

    rem = n % 10;
    console.log(rem);
    n = parseInt(n / 10);
    console.log(n);

}