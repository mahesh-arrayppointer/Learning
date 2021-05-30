let roll = 10, m1 = 60, m2 = 55, m3 = 70, total = 0, avg;

total = m1 + m2 + m3;
avg = total / 3;

if( avg >= 60 ) {
    console.log("Grade: A");

} else if(( avg >= 50) && ( avg <= 60)) {
    console.log("Grade: B");

} else if(( avg >= 40) && ( avg <= 50)) {
    console.log("Grade: C");

} else {
    console.log("Grade: D")
}