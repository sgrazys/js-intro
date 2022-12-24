console.clear();
/* 
Palieka tik naorimas reiksmes
*/

const numbers = [-1, 5, -7, 3.5, 10];

// noriu gauti, pasiimti tik negative numbers
const negativeNumber = [];

for (const number of numbers) {
    if(number < 0) {
        negativeNumber.push(number);
    }
}

console.log(numbers);
console.log(negativeNumber);

const positiveNumbers = numbers.filter(number => number > 0);
console.log(positiveNumbers);

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

// noriu atfiltruoti tik pilnamecius

const pilnameciai = students.filter(student => student.age >= 18); 
// filter prasuka cikla, ciklo logika yra if, jeigu salyga tenkinama itema sustumia i nauja masyva
console.log(pilnameciai);

// noriu tik tie kurie yra pilnameciai ir vede
function isMariedAndAdult (student) {
    if (student.age < 18) {
        return false;
    }
    if (!student.isMaried) {
        return false
    }
    return true
}
function isMariedAndAdult2 (student) {
    if (student.age < 18 || !student.isMaried) {
        return false;
    }
    return true
}
function isMariedAndAdult3 (student) {
    if (student.age >= 18 && student.isMaried) {
        return true;
    }
    return false
}
function isMariedAndAdult4 (student) {
    return (student.age >= 18 && student.isMaried)
}
const isMariedAndAdult5 = s => s.age >= 18 && s.isMaried


const vedePilnameciai = students.filter(isMariedAndAdult)
console.log(vedePilnameciai);

const vedePilnameciai2 = students.filter(isMariedAndAdult2)
console.log(vedePilnameciai);

const vedePilnameciai3 = students.filter(isMariedAndAdult3)
console.log(vedePilnameciai);

const vedePilnameciai4 = students.filter(isMariedAndAdult4)
console.log(vedePilnameciai);

const vedePilnameciai5 = students.filter(isMariedAndAdult5)
console.log(vedePilnameciai);

// reikalingi vedusiu studentu vardai (pradzioje reikia atsifiltruoti o paskui mapinti - kurti nauja masyva su modifikuotomis reiksmemis )
const onlyNamesOfMarried = students
    .filter(s => s.isMaried) // atsifiltruojam tik tie kurie vede
    .filter(s => s.age >= 18)
    .map( s => s.name); // sumapinam tik vardus (sukuriam nauja masyva i kuri itraukiam tik vedusiu vardus)
console.log(onlyNamesOfMarried);

// surasti counta
const onlyMarriedCount = students
    .filter(s => s.isMaried)  // atfiltuorju studentus
    .length; // gaunu masyvo ilgi
console.log(onlyMarriedCount);

// pasilikti tik vedusiu studentu vardus per loopa
const onlyFans = [];

for(const student of students) {
    if (student.isMaried && student.age >= 18) {
        onlyFans.push(student.name)
    }
}

console.log(onlyFans);