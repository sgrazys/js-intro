console.clear();

import { Student } from "./Student.js";

const petras = new Student('Petras', 1986);


petras.addMarks(10, 0, 2, 22);
petras.addMark(-22);
petras.addMark(8);
petras.addMark(4);
petras.addMark(3.14);
petras.addMark(-3.14);
petras.addMark(6);
petras.addMark(NaN);


console.log(petras.name);
console.log(petras.marks);
console.log(petras.marksAverage());