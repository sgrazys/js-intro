console.clear();

// destructuring - destrukturizavimas

const pazymiai = [10, 9, 8, 7, 6];

const pirmas = pazymiai[0];
const antras = pazymiai[1];
const trecias = pazymiai[2];

console.log(pirmas);
console.log(antras);
console.log(trecias);

console.log('--------- #####');

const marks = [10, 2, 8, 4, 6];
const [first, , , third] = marks;

console.log(first);
console.log(third);

console.log('--------- #####');
const petras = ['Petras', 99, true];
const [vardas, amzius, vedes] = petras;

console.log('Vardas:', vardas);
console.log('Amzius:', amzius);
console.log('Ar vedes:', vedes);

const ona = ['Ona', 87, false];
const [name, age, isMarried] = ona;

console.log(name, age, isMarried);

const car = {
    brand: 'Tesla',
    model: 'S',
    color: 'red'
 }

const { brand, model } = car
console.log(brand, model);


// SPREAD

const numbers = [1, 2, 3];
const numbers2 = [...numbers, ...numbers, 666];
const numbers3 = [...numbers2, 999, ...numbers2];
const numbers4 = [ 999, ...numbers, ...numbers2, 14, ...numbers, ...numbers3]

console.log(numbers);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);

const person = {
    name: 'Maryte',
    age: 88,
    isMarried: true,
    childrenCount: 5,
    phone: 12849687324,
    adress: 'Gatves g. 5, Vilnius',
    favoriteColor: 'Green',
    height: 172,
    eyes: '👀'

}

console.log(person);

const person2 =  {
    ... person,
    car: { 
        ...car,  
        price: 10000
    },
    happy: true
}

console.log(person2);

console.log(person2.car.price);


const {childrenCount, happy, favoriteColor} = person2;

console.log(childrenCount, happy, favoriteColor);
