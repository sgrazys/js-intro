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