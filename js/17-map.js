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

const b = [1, 2, 3,[4, 5, 6, [7, 8, 9]]];
const c = [...b];

b[0] = 7;

console.log(b);
console.log(c);

c[3][0] = 99;
console.log(b);
console.log(c);

console.log(c);

const f = [9, 8, 7]
const g = []

for(let i = 0; i < f.length; i ++) {
    g.push(f[i]);
}

console.log(f);
console.log(g);

f[0] = 99;

console.log(f);
console.log(g);
