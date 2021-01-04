// 1

let monTab = ['pomme', 'fraise', 'melon', 'citron']

// supprimer le dernier élément

monTab.pop();
console.log(monTab);

// supprimer le premier élément

monTab.shift();
console.log(monTab);

// ajouter un élément à la fin de l'array

monTab.push('pastèque')
console.log(monTab);

// ajouter un élément au début de l'array

monTab.unshift('banane')
console.log(monTab);

// deuxième élément en majuscules

// secondElement = monTab[1].toUpperCase();
// console.log(secondElement);

monTab[1] = monTab[1].toUpperCase();
console.log(monTab);

// changer l'ordre de l'array

// monTab.sort();
// console.log(monTab);

monTab.reverse();
console.log(monTab);

// 2

let chiffres = [4, 5, 2, 1, 3]
console.log(chiffres);

// ordonner les chiffres

chiffres.sort();
console.log(chiffres);

// concatenation

chiffres = chiffres.join('-');
console.log(chiffres);

// chaîne de caractères en un tableau

chiffres = chiffres.split(['-']);
console.log(chiffres);

// 3

var valentin = []

valentin.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(valentin, valentin.length);

console.log(valentin.indexOf(3));

let valentinbis = ['objet 1', 'objet 2', 'objet 3', 'objet 4', 'objet 5']

valentin.splice(valentin.indexOf('objet 2'), 1)
console.log(valentin);




