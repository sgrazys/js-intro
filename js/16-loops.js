console.clear();

/* 
LOOP - ciklas
tevas -> for
vaikai -> while, for-of, for-in, foreach
next level -> map, sort, filter, reduce, ...
*/


// surasti skaiciu vidurki
const marks = [10, 2, 8, 6, 4];

// FOR
let sumFor = 0;
for(let iFor = 0; iFor < marks.length; iFor++) {
    const mark = marks[iFor]
    sumFor += mark;
}
console.log('For: ',sumFor / marks.length);
 

// WHILE
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    const mark = marks[iWhile];
    sumWhile += mark;
    iWhile ++;
}

console.log("While: ", sumWhile / marks.length);

// FOR - OF
let sumForOf = 0
for (const mark of marks) {
    sumForOf += mark;
}
 
console.log("For of: ", sumForOf / marks.length);

// FOR EACH
let sumForEach1 = 0;
marks.forEach(function(mark, iForeach, list ) {
    sumForEach1 += mark;
 });
console.log('For each: ', sumForEach1 / marks.length);


let sumForEach2 = 0;
marks.forEach(mark => sumForEach2 += mark);
console.log('For each 2: ', sumForEach2 / marks.length);


let sumForEach3 = 0;

function sumavimasForEach (mark, iForeach, list) {
   return sumForEach3 += mark;
} 

marks.forEach(sumavimasForEach);
console.log('For each 3: ', sumForEach3 / marks.length);

// FOR-IN (iteruoja per objekta)
const user = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    favoriteNumber: 13,
    children: 5,
    grandChildren: 25,
    key: 'geltonas'
}

// noriu gauti visu skaiciu suma.
let sumForObj = 0;
const userKeys = Object.keys(user);

for(let i = 0; i < userKeys.length; i++) {
    const key = userKeys[i];
    const value = user[key];
    if (typeof value === 'number' 
        && isFinite(value) 
        && value > 0) {
        sumForObj += value;
    }

}
console.log('For-Obj:', sumForObj, '->', 142);


let sumForIn = 0;

for(const key in user) {
    const value = user[key];
    if (typeof value === 'number' 
        && isFinite(value) 
        && value > 0) {
        sumForIn += value;
    }

}

console.log('For-in:', sumForIn, '->', 142);