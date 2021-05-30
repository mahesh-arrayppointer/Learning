let x,r1,r2,a = 3, b = 40, c = 2;

x = b * b - 4 * a * c;
console.log("value of x ", x);

r1 = ( -b+x) / 2 * a;
r2 = ( -b-x) / 2 * a;

console.log("r1", r1);
console.log("r2", r2);


if( x > 0 ) {
    console.log("roots are unqual");

} else if( x < 0) {
    console.log("roots are imaginary");

} else {
    console.log("roots are same")
}

