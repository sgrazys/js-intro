console.clear();

/* 
TERNARY Supaprastintas if'as
if'o klausimas ? ka daryti kai true : ka daryti kai false;
*/

// IF variantas
const laimejo = false;
let  pinigine = 10; 

if (laimejo) {
    pinigine += 20;
} else {
    pinigine -= 1
}

console.log(pinigine);


// IF supaprastintas variantas
const pergale = false;
let zinute = "Sveikinu tu laimejai";

if (!pergale) {
    zinute = 'Bandykite kita karta';
}

console.log(zinute);


// TERNARY (if'o klausimas)
const lotteryWin = false;
const wallet = 10 + (lotteryWin ? 20 : -1);
console.log(wallet);


const paskola = false
const saskaita = 100 + (paskola ? 300 : 0)

console.log(saskaita);



const automobiliu = true;
const kelionesTrukme = 4 - (automobiliu ? 2 : 0);

console.log(kelionesTrukme);

const msgWin = false;
const msg = (msgWin ? 'Sveikinu' : 'Nenuleisk ranku')

console.log(msg);