let maritalStatus = 'm', gender = 'f', age = 40;

if( maritalStatus == 'm') {
     console.log("Driver is insured");
} else if( maritalStatus == 'u' ) {

    if(gender == 'm' ) {

        if( age >= 30) {
            console.log("insured"); 
        } else {
            console.log("not insured")
        }
    } else if(gender == 'f') {
        
        if(age >= 18 ) {
            console.log("insured");
        } else {
            console.log("not insured")
        }
    }
} else {
    console.log("invalid input");
}