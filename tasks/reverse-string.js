
/* 
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
 */

console.clear();

function reverseString (string) {
    let newString = "";

    if (typeof string !== "string" ) {
        return "ERROR: Please wrap your input with backticks (``).";
    } else {
        for (let i = string.length - 1; i >= 0; i--) {
            newString += string[i];
        }
    }
    return newString;
}


console.log(reverseString(`Infinity`));
console.log(reverseString(122334545));  
console.log(reverseString("abcdef"));  
