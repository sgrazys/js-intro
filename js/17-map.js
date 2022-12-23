/* 
MAP - grazina nauja tos pacios apmties masyva 
    su naujomis(modifikuotomis) reiksmemis.
*/
console.clear();

const marks = [10, 2, 8, 4, 6];

// padaryti masyvo kopija
const a = marks
console.log(marks);
console.log(a);

marks[0] = 1;
console.log(marks);
console.log(a);

a[2] = 3;
console.log(marks);
console.log(a);

console.log("-----------");
console.log("COPY spread");

const b = [1, 2, 3,[4, 5, 6, [7, 8, 9]]];
const c = [...b];

b[0] = 7;

console.log(b);
console.log(c);

c[3][0] = 99;
console.log(b);
console.log(c);

console.log('-----------');
console.log('COPY for');

const f = [9, 8, [7, [4, 3], 2], 6, 5];
const g = [];
for (let i = 0; i < f.length; i++) {
  if (Array.isArray(f[i])) {
    const innerArray = [];

    for (let j = 0; j < f[i].length; j++) {
      if (Array.isArray(f[i][j])) {
        const innerArray2 = [];

        for (let k = 0; k < f[i][j].length; k++) {
          innerArray2.push(f[i][j][k]);
        }

        innerArray.push(innerArray2);
      } else {
        innerArray.push(f[i][j]);
      }
    }

    g.push(innerArray);
  } else {
    g.push(f[i]);
  }
}
console.log(f);
console.log(g);

f[0] = 99;
f[2][0] = 77;
f[2][1][0] = 44;
console.log(f);
console.log(g);

// auksciau pateikta koda reiktu perrasyti su rekursija ⤴️

console.clear();
console.log("-----------");
console.log("map");



const vienetai = [2, 4, 6, 8 , 10];  
const units = [ ];

for (i = 0; i < vienetai.length; i++) {
    units.push(vienetai[i] * 2 - 1);
}

console.log(vienetai);
console.log(units);

console.log('-------');

// nooriu sustumti mazmenine kaina kuri yra didmenine kaina * 1.5 (padidinta 50%)
const didmenineKaina = [10, 20, 50, 100];
const mazmenineKaina = [];

function priceConvert(price) {
    return price * 1.5;
}

for(const kaina of didmenineKaina) {
    mazmenineKaina.push(priceConvert(kaina))
}
console.log(didmenineKaina);
console.log(mazmenineKaina);

const retailPrice1 = didmenineKaina.map(price => price * 1.5);
console.log(retailPrice1);

const retailPrice2 = didmenineKaina.map(priceConvert);
console.log(retailPrice2);

// kad kintamasis b turetu dvigubai didesnes reiksmes
const aa = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
const bb = aa.map(num => num * 2);
// i cc noriu grazinti nulius
const cc = aa.map(num => num * 0);
// padaryti masyva, jeigu yra teigiami skaiciai juos palieku jeigu, neigiami padaru juos 0.
const dd = aa.map(n =>  n > 0 ? n : 0);

console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);


// padaryk abreviaturas
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const abbr = names.map(s => s[0]);

console.log(names);
console.log(abbr);

const students = [
  {name: 'Petras', age: 99,isMaried: true},
  {name: 'Maryte', age: 88,isMaried: false},
  {name: 'Jonas', age: 77,isMaried: false},
  {name: 'Ona', age: 66,isMaried: true},
]

const studentNames = students.map(student => student.name )
const studentAges = students.map(student => student.age )
const studentStatus = students.map(student => student.isMaried )
console.log(students);
console.log(studentNames);
console.log(studentAges);
console.log(studentStatus);

// prideti papildomus laukus prie masyvo students (prie kievieno objekto )
const extra = {childresn: 0, phone: null}
const studentExtra = students.map(student => ({...student, ...extra}));

console.log(studentExtra);

