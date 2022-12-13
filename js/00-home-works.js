console.clear();

// KINTAMUJU INICIAVIMAS

/* 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console */

    const num1 = 12;
    const num2 =182;
    const num3 = 7;

    console.log(num1);
    console.log(num2);
    console.log(num3);

    console.log('---------');
    
/* 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console */

    const firstName = "Marlon";
    const lastName = "Brando";
    const profession = "Actor";

    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`Profession: ${profession}`);

    console.log('---------');

/* 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console */

    const marks = [9, 7, 7, 10, 6];
    const luckyNum = [3, 13, 17, 55, 89];
    const playerNum = [9, 11, 33, 43, 77];

    console.log(marks);
    console.log(luckyNum);
    console.log(playerNum);

    console.log('---------');

/* 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console */

    const colors = ['red', 'blue', 'green', 'pink', 'white'];
    const fruits = ['apple', 'kiwi', 'pear', 'melon', 'bannana'];
    const animals = ['wolf', 'lion', 'tiger', 'puma', 'bear'];

    console.log(colors);
    console.log(fruits);
    console.log(animals);

    console.log('######');


// VEIKSMAI SU KINTAMAISIAIS

/* 1. Susumuoti visus skaičiaus tipo kintamuosius
    a. Rezultatą išvesti į console */

    const total = num1 + num2 + num3;
    console.log(total);

    console.log('---------');

/* 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
    a. Rezultatą išvesti į console */

    const string = firstName + ' ' + lastName + ' ' + profession;
    console.log(string);

    console.log('---------');

/* 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 
    a. 1-2+3-4+5
    b. Rezultatą išvesti į console */

    const marksSum = marks[0] - marks[1] + marks[2] - marks[3] + marks[4];
    console.log(marksSum);

    const luckyNumSum = luckyNum[0] - luckyNum[1] + luckyNum[2] - luckyNum[3] + luckyNum[4];
    console.log(luckyNumSum);

    const playerNumSum = playerNum[0] - playerNum[1] + playerNum[2] - playerNum[3] + playerNum[4];
    console.log(playerNumSum);

    console.log('---------');

/* 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas */

const colorList =`${colors[0]}, ${colors[1]}, ${colors[3]}, ${colors[3]}, ${colors[4]}`;
console.log(colorList);

const fruitsList =`${fruits[0]}, ${fruits[1]}, ${fruits[3]}, ${fruits[3]}, ${fruits[4]}`;
console.log(fruitsList);

const animalsList =`${animals[0]}, ${animals[1]}, ${animals[3]}, ${animals[3]}, ${animals[4]}`;
console.log(animalsList);


 console.log('######');

// KINTAMUJU PALYGINIMAS

/* Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”. */

/* 1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus */

    /*  const num1 = 12;
        const num2 =182;
        const num3 = 7; */

        if (num1 > num2) {
            console.log('Pomidoras');
        } else {
            console.log("Bandykite kitą kartą");
        }

        if (num1 > num3) {
            console.log('Pomidoras');
        } else {
            console.log("Bandykite kitą kartą");
        }

        if (num1 < num2) {
            console.log('Pomidoras');
        } else {
            console.log("Bandykite kitą kartą");
        } 

        if (num1 < num3) {
            console.log('Pomidoras');
        } else {
            console.log("Bandykite kitą kartą");
        }
        if (num1 === num2 && num1 ===num3) {
            console.log('Pomidoras');
        } else {
            console.log("Bandykite kitą kartą");
        }

        if (num1 !== num2 && num1 !==num3) {
            console.log('Pomidoras');
        } else {
            console.log("Bandykite kitą kartą");
        }

        if (num1 >= num2) {
            console.log('Pomidoras');
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (num1 >= num3) {
            console.log('Pomidoras');
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (num1 <= num2) {
            console.log('Pomidoras');
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (num1 <= num3) {
            console.log('Pomidoras');
        } else {
            console.log('Bandykite kitą kartą');
        }

        console.log('-------');

/* 2. Išvesti teksto tipo kintamųjų ilgius */

    /*  const firstName = "Marlon";
        const lastName = "Brando";
        const profession = "Actor"; */

        const firstNameLenght = firstName.length;
        const lastNameLenght = lastName.length;
        const professionLenght = profession.length;

        console.log(firstNameLenght);
        console.log(lastNameLenght);
        console.log(professionLenght);

/* 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus */

        if (firstNameLenght > lastNameLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (firstNameLenght < lastNameLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }


        if (firstNameLenght === lastNameLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (firstNameLenght !== lastNameLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (firstNameLenght >= lastNameLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (firstNameLenght <= lastNameLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (firstNameLenght > professionLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (firstNameLenght < professionLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (firstNameLenght === professionLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (firstNameLenght !== professionLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (firstNameLenght >= professionLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

        if (firstNameLenght <= professionLenght) {
            console.log(`Pomidoras`);
        } else {
            console.log('Bandykite kitą kartą');
        }

/* 4. Išvesti sąrašo tipo kintamųjų ilgius */

   /*   const colors = ['red', 'blue', 'green', 'pink', 'white'];
        const fruits = ['apple', 'kiwi', 'pear', 'melon', 'bannana'];
        const animals = ['wolf', 'lion', 'tiger', 'puma', 'bear']; */

        const colorsRedLength = colors[0].length;
        const colorsBlueLength = colors[1].length;
        const colorsGreenLength = colors[2].length;
        const colorsPinkLength = colors[3].length;
        const colorsWhiteLength = colors[4].length;


/* 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus */

    if (colorsRedLength > colorsBlueLength) {
        console.log('Pomidoras')
    } else {
        console.log('Bandykite kitą kartą');
    }

    if (colorsRedLength < colorsBlueLength) {
        console.log('Pomidoras')
    } else {
        console.log('Bandykite kitą kartą');
    }

    if (colors[2].length > colors[4].length) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kitą kartą');
    }
    if (colors[2].length === colors[4].length) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kitą kartą');
    }

    if (colors[3].length !== colors[4].length) {
        console.log('Pomidoras');
    } else {
        console.log('Bandykite kitą kartą');
    }

