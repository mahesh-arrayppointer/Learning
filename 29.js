
let n = 167, rem = 0, sum = 0, temp;
temp = n;
while( n > 0) {

    rem = n % 10;
    sum = sum + rem * rem * rem;
    console.log(sum);
    n = parseInt(n / 10);

}
if( temp == sum ) {

    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");

}