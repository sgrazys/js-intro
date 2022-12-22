/* 
REST  operatorius - surenka likusias nepaiimtas reiksmes destrukturizuojant
*/
console.clear();

const marks = [10, 2, 8, 4, 6];
const [first, second, ...visiKiti] = marks

console.log(marks);
console.log(first);
console.log(second);
console.log(visiKiti);

const person = {
    name: 'Jokubas',
    age: 23,
    isMarried: true,
    favorite: {
        color: 'red',
        number: 13,
        artist: 'Spice Grils'
    }
}

const {age, isMarried, ...other} = person;
console.log(age, isMarried);
console.log(other);

//  2 parametra
function suma (a,b) {
    console.log('ARGS', a, b, [...arguments] );
    return a + b;
}

const s1 = suma(7, 5);
console.log(s1);

// 1 parametras(array), bet su daug reiksmiu 
function arraySum(list) {
    let sum = 0;

    for(let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}

const s2 = arraySum([10, 2, 8, 4, 6]);
console.log(s2);


function sudetis(...args) {
    let total = 0;
        for (let i = 0; i < args.length; i++) {
          total += args[i];
        }
    return total;
}

const s3 = sudetis(10, 2, 8, 4, 6);
console.log(s3);



function product() {
    let total = 1;
    
    for (let i = 0; i < [...arguments].length; i++) {
      total *= [...arguments][i];
    }

    return total;
}

const s4 = product(10, 2, 8, 4, 6);
console.log(s4);