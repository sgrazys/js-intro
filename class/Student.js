class Student {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
    this.hasDormitory = false;
    this.marks = [];
  }

  //Metodas itraukiantis nauja pazymi i prototipo masyva:
  addMark (mark) {
    this.marks.push(mark)
  }

  marksAverage() {
    const correctMarks = this.marks
    .filter((m) => m >= 1 && m <= 10 && m % 1 === 0 ); // ATSIFILTRAVOM NETEISINGUS PAZYMIUS

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
      if(mark >= 1 && mark <= 10 && mark % 1 ===0) {
        sum += mark;
        correct ++ // suskaiciuojam kiek geru skaitmenu liko po if'o
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