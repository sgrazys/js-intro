console.clear();
/* 
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

/* findSmallestInt(args) {
    let minNum = args[0];

    for(let i = 1; i < args.length; i++ ) {
        if(minNum > args[i]) {
            minNum = args[i];
        }
    }

    return minNum;
} */



console.clear();

/* 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

Exampl
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
*/

// 1 + 1 + 1 + 0 + 1 + 1 + 1 + 1 

// function countSheeps(arrayOfSheep) {
    
//     let count = 0;
//     for(const sheep of arrayOfSheep) {
//         if (sheep) {
//             count += 1;
        //  console.log('Sheep yra:', sheep);
//         }
//     }
//         return count;
//     return arrayOfSheep.filter(sheep => sheep === true).length;
// }



// console.log(
//   countSheeps([
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
//   ])
// );

// console.log([
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ]);


console.clear();

/* 
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

EXAMPLE
1705 --> 18 -- 1705 / 100 (17.05) jei nesveikas skaicius + 1,  Math.ceil(17.05)
1900 --> 19 -- 1900 / 100 (19) 
1601 --> 17
2000 --> 20

*/
/*  console.clear()

function century(year) {
  if ((year / 100) % 1 === 0) {
    return year / 100;
  } else {
    return Math.ceil(year / 100);
  }

  // return Math.ceil(year / 100);
}




console.log(century(1901)); */

console.clear();

/* 
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

('+', 4, 7) --> 11 | 4 + 7
('-', 15, 18) --> -3 
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2) {
// if(operation === '+') {
//     return value1 + value2;
// }  
// if(operation === '-') {
//     return value1 - value2;
// }  
// if(operation === '*') {
//     return value1 * value2;
// }  
// if(operation === '/') {
//     return value1 / value2;
// }  

}

// basicOp("/", 49, 7);

// console.log(basicOp("-", 20, 2))

    // const operation = 'labas';

    // switch (operation) {
    //   case "+":
    //     console.log('+');
    //   case "-":
    //      console.log('-');
    //   case "*":
    //     console.log("/");
    //     break;
    //   case "/":
    //     console.log("*");
    //     default:
    //         console.log('ERROR');
    //         break;
    // };
