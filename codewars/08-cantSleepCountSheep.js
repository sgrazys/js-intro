/* 
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

console.clear();


var countSheep = function (num) {
  let sentence = '';
  for(let i = 1; i <= num; i++) {
    sentence += `${i} sheep...`;
  }
  return sentence
};


console.log(countSheep(2));
