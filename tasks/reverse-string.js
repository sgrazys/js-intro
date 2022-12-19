/* 
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”

*/

console.clear();

function reverseString (str) {
    if (typeof str !== 'string') {
        return `ERROR: argumentas turi buti "string" tipo, o ne ${typeof str}!`
    }

    let word = ' ';

    for(let i = str.length - 1; i >= 0; i--) {
        word += str[i];
    }

    return word;
}


console.log(reverseString('abcdef'), '--', 'fedcba');
console.log(reverseString('12345'), '--', '54321');
console.log(reverseString('sula'),'--', 'alus');
console.log(reverseString('gytis'),'--', 'sityg');
console.log(reverseString("Labas, pasauli!"));
console.log(reverseString("qwerty"));

console.log(reverseString('baravykas'));
console.log(reverseString(true));
console.log(reverseString(123));
console.log(reverseString(NaN));
console.log(reverseString(Infinity));
console.log(reverseString(-124));
console.log(reverseString());
console.log(reverseString(undefined));
console.log(reverseString([]));
console.log(reverseString(function(){}));
console.log(reverseString(null));