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

console.log('------COMPLEX TERNARY----------');
// COMPLEX TERNARY

let a = 0 < 1 
    ? 2 
    : 3; // 2 nes true (0 yra maziau uz 1)
console.log(a); 

const b = 0 > 1 
    ? 2 
    : 3; // 3 nes false (0 ner daugiau uz 1)
console.log(b); 

const c = 0 === 1 
    ? 2 
    : 3; // grazino 3 nes jie yra ne vienodi
console.log(c); 

const d = 0 < 1  // nestintas if elsas pvz zemiau
    ? 2 
    : 3     
        ? 4 : 5; 
console.log(d); 

const e = 0 > 1 // ar 0 > 1, ne
    ? 2 
    : 3 // kodas soka cia, kadangi cia nestinta ir atrodo kaip naujas ifas, tda vel klausimas ar 3 daugiau uz 1? --> taip, true ir tuomet ispausdina 4
            ? 4 
            : 5; 
console.log(e); 

const f = 0 < 1 
    ? 2  // nulis maziau uz 1, tad true reiksme tampa 2, todel klausia ar 2 maziau uz 3, reiksme traip
        ? 3 // todel grazina 3
        : 4 
            
    : 5;
console.log(f);

const g = 0 > 1 ? 2 ? 3 : 4 :5 ? 6 : 7;

console.log(g);