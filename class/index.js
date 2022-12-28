console.clear();

import { Student } from "./Student.js";

const petras = new Student('Petras', 1986);
const maryte = new Student('Maryte', 1990);

console.log(petras.name, 'pazymiai', petras.marks);
console.log(maryte.name, 'pazymiai', maryte.marks);