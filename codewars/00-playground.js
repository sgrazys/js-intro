console.clear();

/* 

Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

 */

function arrayMadness(a, b) {
    if(!Array.isArray(b)) {
        return false
    }

    let sumSqr = a.map((n) => n**2).reduce((t, n) => t + n);
    let sumCubes = b.map((n) => n**3).reduce((t, n) => t + n);
    
    return sumSqr > sumCubes ? true : false;
}

console.log(arrayMadness([1, 2, 3]));

console.clear();


/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F



*/

// function abbrevName(name) {

//     let arr = name.split(' ');
//     return arr[0][0] + '.' + arr[1][0].toUpperCase();
//     // console.log(name.split(' ').map((name) => name[0].toUpperCase()).join('.'));
// }

// abbrevName("Sam harris"), "S.H";
// abbrevName("Patrick Feenan"), "P.F";
// abbrevName("P Favuzzi")

// let products = ['Obuolys', 'Morka', 'Arbata', 'Bulves', 'Cepelinai']

// for (let i = 0; i < products.length; i++ ) {
//     console.log (i+1 + ')', products[i] + ' - ')
// }



const num = [10, 2, 4, 6, 8];

const sum = num.reduce((t, n) => t + n, 0);

console.log(sum);