const passGenFunc = (inpRange) => {
    const ltr = [
        // number
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        // special character
        "!", "@", "#", "$", "%", "^", "&", "*",
        // uppercase
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        // lowercase
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        
        let fn;
        let pass = "";
        if (inpRange > 7) {
            for (let i = 0; i < inpRange; i++) {
            // ltr.length - 1 to not generate -1 index
            const rndNumber = Math.floor(Math.random() * ltr.length - 1);

            fn = pass += ltr[rndNumber]
        }
        return fn
    }

    return "Length Should Be Greater than 6"

}

console.log(passGenFunc(1));