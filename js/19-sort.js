console.clear();
/* 
SORT - rikiavimas. Nuo maziau iki daugiau, i kaire desne, aukstyn zemyn
jei lyginamos reiksmes yra(pirma uz antra):
    - mazesne (-1)
    - didesne (1)
    - lygios (0)
*/

// kai filtuorji einamą reiksmę lyginame su kitomis reiksmemis. Todel mus reikes gauti dvi reiksmes (a ir b) ir paklausti kuri reiksme didesne ar mazesne ar jos lygios?



const dic = ['C', 'A','E','B'];

// sukurti zodyna kuris eina nuo A iki Z
const dicAZ = [...dic].sort(); // kadangi sortinant zodynas mutuoja t.y. keiciama ant to pacio masyvo, reikia pasidaryti jo kopija su spread [... (varName)]

// noriu isortinti nuo Z iki A
const dicZA = [...dic].sort().reverse();  // pasidarom kopija su spread


console.log("Originalus masyvas", dic);
console.log("Nuo A iki Z:", dicAZ);
console.log('Nuo Z iki A:',dicZA);

console.log('--------------');
console.log('SORTINAM NUMBERS');


/* dirbant su skaiciais  sortas lygina pirma skaitmeni su pirmu. Reikia prisimint, kad maziau yra -1, lygu 0, daugiau 1.
8 - 2 = 6 TEIGIAMAS rezultatas, t.y. 8 daugiau uz 2; 2 - 8 = -6 NEIGIAMAS rezulatat, t.y. 2 yra maziau uz 8 */  
const num = [10, 2, 8, 14, 15, 6, 23, 45];

// todel dirbarnt su skaiciais butina nurodyti funkcija, kuri ima du parametrus ir juos palygina t.y. surandu ju skirtuma.
const numAZ = [... num].sort((a, b) => a - b); 
const numZA = [... num].sort((a, b) => b - a); 
const numAZrevers = [... num].sort((a, b) => a - b).reverse(); 


console.log(num);
console.log(numAZ);
console.log(numZA);
console.log(numAZrevers);

console.log("--------------");
console.log("SORTINAM OBJECT");

const students = [
  { name: "Petras", age: 99, isMaried: true },
  { name: "Maryte", age: 88, isMaried: false },
  { name: "Jonas", age: 77, isMaried: false },
  { name: "Ona", age: 66, isMaried: true },
  { name: "Simon", age: 7, isMaried: false },
  { name: "Itoleta", age: 17, isMaried: true },
  { name: "Allas", age: 47, isMaried: true },
  { name: "Eliza", age: 2, isMaried: false },
];


// issirikiuoti nuo jauniausio iki vyriausio

const studentsAgeAZ = [...students].sort((a, b) => a.age - b.age);  // kai dirbi su obj reikia lysti i obj, konkrecia jo reiksme ir operuoti su ja.
const studentsAgeZA = [...students].sort((a, b) => b.age - a.age);
console.log(studentsAgeAZ);
console.log(studentsAgeZA);

// isrikiuoti pagal varda
const studentNameAZ = [...students]
    .sort((a,b) => a.name < b.name ? -1 : a.name === b.name ? 0 : 1 ); // reikia, kad GRAZINTU SKAICIU, todel panaudojam complex ternery ternery

console.log(studentNameAZ);

function compareStudents (a, b) {
    if (a.name < b.name ) {
        return -1
    }
    if (a.name === b.name ) {
        return 0
    }
    return 1;
} 

const studentNameAZfunc = [...students].sort(compareStudents);
console.log(studentNameAZfunc);