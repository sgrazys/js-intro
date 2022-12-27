console.clear();

/* 
    REDUCE - sutraukti/ sumazinti
    procedura, kai is saraso reiksmiu gauti viena galutine reiksme.
    daugiskaita -> vienaskaita
*/

const numbers = [10, 2, 8, 4, 6];

// GAUTI ARRAY SUMA 

// gaunam su ciklu
let sum = 0;
for(const number of numbers) {
    sum += number
}
console.log('FOR SUM:', sum);

//gaunam su .reduce() logika vieotja

const reduceSum = numbers.reduce((sum, number) => sum + number)
console.log('REDUCE SUM AVERAGE BANDYMAS:', reduceSum);


function calcSum(sum, number) {
    return sum + number;
}

// paprastas reduce - logika isorineje funkcijoje
const reduceSumFunc = numbers.reduce(calcSum);
console.log('REDUCE FUNC SUM:', reduceSumFunc);


// KITI paprasti reduce pavyzdziai
const reduceMinus = numbers.reduce((t, n) => t - n);
console.log('REDUCE MINUS:', reduceMinus);

const reduceMulti = numbers.reduce((t, n) => t * n);
console.log('REDUCE MULTIPLY:', reduceMulti);

const reduceDiv = numbers.reduce((t, n) => t / n);
console.log('REDUCE DIVIDE:', reduceDiv);

// reduce su nurodyta pradine akumuliatoriaus reiksme
const reduceSum2 = numbers.reduce((t, n) => t + n);
console.log('REDUCE 2 SUM:', reduceSum2);

const reduceMinus2 = numbers.reduce((t, n) => t - n, 0);
console.log('REDUCE 2 MINUS:', reduceMinus2);

const reduceMulti2 = numbers.reduce((t, n) => t * n, 1);
console.log('REDUCE 2 MULTIPLY:', reduceMulti2);

const reduceDiv2 = numbers.reduce((t, n) => t / n, 1);
console.log('REDUCE 2 DIVIDE:', reduceDiv2);

// patikrinam ar iki galo isdalinam duota skaiciu "maziausiais" dalikliais

const atsGood = [2, 2, 5].reduce((t, n) => t / n, 100);
console.log(atsGood);

const atsGood2 = [2, 2, 2, 2, 2, 2, 2].reduce((t, n) => t / n, 128);
console.log(atsGood2);


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

// suraskime studentu amziaus vidurki

const averageAge = students.reduce((t, s) => t + s.age, 0) / students.length;
console.log('Students', parseInt(averageAge.toFixed(1)));
console.log('Students', +averageAge.toFixed(1));
console.log('Students', parseFloat(averageAge.toFixed(1)));


console.log('1 -->', +'5', parseInt('5'), parseFloat('5'));
console.log("2 -->", +"3.415", parseInt("3.415"), parseFloat("3.415"));
console.log("3 -->", +"labas", parseInt("labas"), parseFloat("labas"));
console.log('4 -->', +'labas3.14515', parseInt('labas3.14515'), parseFloat('labas3.14515'));
console.log('5 -->', +'3.14515labas', parseInt('3.14515labas'), parseFloat('3.14515labas'));
console.log( "6 -->", +"3.14515labas3.14515", parseInt("3.14515labas3.14515"), parseFloat("3.14515labas3.14515")
);