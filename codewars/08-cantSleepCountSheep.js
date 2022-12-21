/* 
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

console.clear();


console.log(countSheep(0));

// console.log(countSheep(0));
// console.log(countSheep(1));
// console.log(countSheep(2));
// console.log(countSheep(3));

// console.log(countSheep(0), "");
// console.log(countSheep(1), "1 sheep...");
// console.log(countSheep(2), "1 sheep...2 sheep..." );
// console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");




    // if (num === 0) {
    //   return "";
    // }

    // let count = 1;
    // for (let i = 1; i <= num; i++) {
    //   console.log(count++);
    // }



/*     var countSheep = function (num) {
        if (num === 0) {
          return "";
        }

      let str = "";

      for (let i = 1; i <= num; i++) {
        `${i} sheep...`;
        str += `${i} sheep...`;
      }

      return str;
    }; */