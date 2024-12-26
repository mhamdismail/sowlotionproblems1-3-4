function ValidEmail(email) {
    let count = 0;
    
    
    if (email.length >= 256 || email.length === 0) return false; 
    
    if (email.includes("@") && email.includes(".")) {
        const emailArray = email.split("");
        
        if (emailArray[0] === "@" || emailArray[emailArray.length - 1] === "@") {
            return false;
        }
        
        for (let i = 0; i < emailArray.length; i++) {
            if (emailArray[i] === "@") {
                count++;
            }
            if (count > 1) return false;
        }

        const atSplit = email.split("@");
        const firstSplit = atSplit[0];
        const secondSplit = atSplit[1];

        if (firstSplit[firstSplit.length - 1] === "." || secondSplit[0] === ".") {
            return false;
        }
    } else {
        return false;
    }

    return true;
}

console.log(ValidEmail("john.doe@gmail.com")); 
console.log(ValidEmail("john@doe@gmail.com"));
console.log(ValidEmail("john@.com")); 



