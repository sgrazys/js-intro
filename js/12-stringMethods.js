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
console.log('Maryte'.includes('x'));



console.log("---- startsWith()");

console.log('Maryte'.startsWith('Ma'));
console.log('Maryte'.startsWith('Mary'));
console.log('Maryte'.startsWith('ary'));
console.log('Maryte'.startsWith('mary'));
console.log('Maryte'.startsWith('ry'));
console.log('Maryte'.startsWith('te'));
console.log('Maryte'.startsWith('Marye'));
console.log('Maryte'.startsWith('Maryt'));

console.log("---- endsWith()");

console.log('Maryte'.endsWith('t'));
console.log('Maryte'.endsWith('te'));
console.log('Maryte'.endsWith('yt'));
console.log('Maryte'.endsWith('aryte'));

const istiktukas = 'Pyst';
const sakinys = "Va, pyst ir nuskrydo";
const sakinys2 = "Pyst per galva su vezdu";

console.log('Istiktukas:', sakinys.includes(istiktukas));
console.log('Istiktukas:', sakinys2.includes(istiktukas));

console.log(sakinys.toLowerCase());
console.log(sakinys2.toUpperCase());

const p1 = sakinys.toLowerCase().includes(istiktukas.toLowerCase());
const p2 = sakinys2.toLowerCase().includes(istiktukas.toLowerCase());
console.log('Istiktukas lowercase:', p1 );
console.log('Istiktukas:', p2 );


console.log(" ");
console.log("---- .indexOf()");

console.log('Jonas'.indexOf('J'));
console.log('Jonas'.indexOf('o'));
console.log('Jonas'.indexOf('n'));
console.log('Jonas'.indexOf('a'));
console.log('Jonas'.indexOf('s'));
console.log('Jonas'.indexOf('z'));
console.log('Jonas'.indexOf('on'));
console.log('Jonas'.indexOf('na'));
console.log('Jonas'.indexOf('as'));
console.log('Jonas'.indexOf('ona'));
console.log('-----------');
console.log('Vasara'.indexOf('a'));
console.log('Ananasas'.indexOf('a'));
console.log('Vasara'.indexOf('a', 2));
console.log('Ananasas'.indexOf('a', 5));

console.clear();
console.log('clear 91 row');


console.log(" ");
console.log("---- SLICE");

const w1 = 'Pasimatymas';
const w2 = w1.slice(-2);
console.log(w2);

console.log(" ");
console.log("---- REPLACE");

const s1 = 'Labas rytas, Lietuva!'
const s2 = s1.replace('rytas', 'vakaras');
console.log(s1);
console.log(s2);

const template = 'Gera diena, {{VARDAS}}!'
const userHi = template.replace('{{VARDAS}}', 'Marlon');

console.log(template);
console.log(userHi);

const song = 'na na na na';
const song2 = song.replace('na', 'la')
const song3 = song.replaceAll('na', 'la')
const song4 = song.replace(/na/g, 'la') // Regex / regexpa / regexp'as

console.log(song);
console.log(song2);
console.log(song3);
console.log(song4);

console.log(" ");
console.log("---- REAPEAT");

const superSong = 'La' + ' na'.repeat(10) + '!';
console.log(superSong);