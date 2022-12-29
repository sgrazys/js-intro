class Student {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
    this.hasDormitory = false;
    this.marks = [];
  }

  isValidMark(mark) {
    if (typeof mark !== 'number'
      || !isFinite(mark)
      || mark < 1
      || mark > 10
      || mark % 1 !== 0) {
			return false;
		}
    return true
  }



  //Metodas itraukiantis nauja pazymi i prototipo masyva:
  addMark (mark) {
    if (!this.isValidMark(mark)) {
      return 'ERROR';
    } 

    this.marks.push(mark);

    return "OK"
  }

  addMarks(...marks) {
    for (const mark of marks) {
      if (!this.isValidMark(mark)) {
        continue;
      }

      this.marks.push(mark);
    }
  }
  
  marksAverage() {
    if(this.marks.length === 0) {
      return 'Neiskaita'
    }

    return this.marks.reduce((t, m) => t + m, 0) / this.marks.length; // daliname is correctMarks length, nes .filter() sukuria nauja masyva is atrinktu item'u
  }
  marksAverage1() {
    const correctMarks = this.marks
    .filter(this.isValidMark); 

    if(correctMarks.length === 0) {
      return 'Neiskaita'
    }

    return correctMarks.reduce((t, m) => t + m, 0) / correctMarks.length; // daliname is correctMarks length, nes .filter() sukuria nauja masyva is atrinktu item'u
  }


  marksAverage2() {

    //MARKS AVERAGE NAUDOJAN CIKLA FOR OF
    let sum = 0;
    let correct = 0;
    for(const mark of this.marks) {
      if (this.isValidMark(mark)) {
			sum += mark;
			correct++; // suskaiciuojam kiek geru skaitmenu liko po if'o
		}
    }

    if (correct === 0) {
      return "neiskaita";
    }

    return sum / correct;

  }

}

export { Student };

/*  
    PAZYMIU VIDURKIS NAUDOJANT CIKLA FOR

    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    return sum / this.marks.length; 

    */
  
  
  
class Teacher {
  
}