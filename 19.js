let a = 3;
let b = 4;
let c = 5;

if(( a >= b) && ( a >= c)) {
    
    if( b >= c) {
        console.log("descending order ",a,b,c);
        console.log("ascending order ",c,b,a);

    } else {
        console.log("descending order ",a,c,b);
        console.log("ascending order ",b,c,a);
    }
} else if(( b >= a) && (b >= c)) {

    if( b >= c) {
    console.log("descending order ",b,a,c);
    console.log("ascending order ",c,a,b);

    } else {
        console.log("descending order ",b,c,a);
        console.log("ascending order ",a,c,b);
    }

} else {
    console.log("descending order ",c,b,a);
    console.log("ascending order ",a,b,c);
}