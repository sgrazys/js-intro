console.clear ();

const name = 'Petras';

console.log(name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

console.log('---- .at() / charAt()');

console.log('Petras'.charAt(0));
console.log('Petras'.charAt(2));
console.log('Petras'.charAt(3));

console.log('------------');

console.log('Petras'.at(-1));
console.log('Petras'.at(-2));
console.log('Petras'.at(-3));
console.log('Petras'.at(-4));
console.log('Petras'.at(-5));
console.log('Petras'.at(-6));

console.log('---- INCLUDE');

console.log('Maryte'.includes('r'));
console.log('Maryte'.includes('ar'));
console.log('Maryte'.includes('yte'));

console.log("---- startsWith()");

console.log('Maryte'.startsWith('Ma'));
console.log('Maryte'.startsWith('Mary'));
console.log('Maryte'.startsWith('ary'));
