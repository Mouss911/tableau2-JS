// Créez un tableau de nombres et utilisez la méthode .map() pour doubler chaque nombre du tableau.

console.log('---Methode .map()---')
let tab1 = [3, 5, 7, 9];

let tab2 = tab1.map(tab => tab * 2);
console.log(tab2)


// Créez un tableau de chaînes et utilisez la méthode .filter() pour renvoyer un nouveau tableau 
//avec uniquement les chaînes dont la longueur est supérieure à 3.

console.log('---Methode .filter()---')
const tableaux = ['Moussa', 'Mor', 'Un', 'Dakar', 'Vol','Santos'];
const nouveauTableaux = tableaux.filter(tableaux => tableaux.length > 3);
console.log(nouveauTableaux);


// Utilisez la méthode .reduce() pour résumer tous les nombres dans un tableau de nombres. 

console.log('---Methode .reduce()---')
let sum = tab1.reduce((nbr1, nbr2) => {
    return nbr1 + nbr2
}, 0);
console.log(sum);


// Utilisez la méthode .sort() pour trier un tableau de chaînes par ordre alphabétique.

const liste = ['Moussa', 'Adja', 'Awa', 'Laye', 'Santos', 'Modou'];
liste.sort();
console.log(liste);


// Utilisez la méthode .forEach() pour imprimer chaque élément d'un tableau.

console.log('---Methode .forEach()---')
let region = ["DAKAR", "THIES", "DIOURBEL", "MATAM", "TAMBA"];
region.forEach(element => console.log(element));

