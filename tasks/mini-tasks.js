 
// KINTAMUJU INICIJAVIMAS

/* 
1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis. 
    Po kiekvieno jų inicijavimo, išvesti į console. 
*/

console.clear();

const num1 = 7 ;
const num2 = 43 ;
const num3 = 117 ;

console.log(num1, num2, num3);
console.log("---------");

/*
2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console 
 */

const firstName = "Marlon";
const surname = "Brando";
const profession = "Actor";

console.log(profession, firstName, surname);
console.log("---------");

/* 
3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console
*/

const numArr = [1, 12, 103, 55, 678 ];
const availableNums = [00, 9, 77, 43, 6];
const houseNums = [99, 29, 107, 43, 8];

console.log(numArr);
console.log(houseNums);
console.log(availableNums);
console.log("---------");

/* 
4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console
*/

const fruits = ['banana', 'kiwi', 'lemon', 'apple', 'pear'];
const vegies = ['carrot', 'potatoe', 'aubergine', 'pumpkin', 'lettuce'];
const colors = ['red', 'blue', 'pink', 'grey', 'green'];

console.log(fruits);
console.log(vegies);
console.log(colors);
console.log("---------");

console.clear();
console.log('console clear 58 row');


// VEIKSMAI SU KINTAMAISIAIS

/* 
1. Susumuoti visus skaičiaus tipo kintamuosius
    Rezultatą išvesti į console
*/

const result = num1 + num2 + num3;
console.log(result);
console.log("---------");

/* 
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
*/

const sentence = `${firstName} ${surname}: ${profession}`;
console.log(sentence);
console.log("---------");

/* 
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
*/

const numArrSum = numArr[0] - numArr[1] + numArr[2] - numArr[3] + numArr[4];
console.log(numArrSum);
console.log("---------");

const availableNumsSum =
availableNums[0] -
availableNums[1] +
availableNums[2] -
availableNums[3] +
availableNums[4];

console.log(availableNumsSum);
console.log("---------");

const houseNumsSum = houseNums[0] - houseNums[1] + houseNums[2] - houseNums[3] + houseNums[4];
console.log(houseNumsSum);
console.log("---------");

/* 
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

console.log(`${fruits[0]}, ${fruits[1]}, ${fruits[2]}, ${fruits[3]}, ${fruits[4]}`);
console.log(`${vegies[0]}, ${vegies[1]}, ${vegies[2]}, ${vegies[3]}, ${vegies[4]}`);
console.log(`${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]}, ${colors[4]}`);
console.log("---------");

