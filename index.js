// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML; 

const array1 = [1, 2, 3]; 
// includes renvoie vrai ou faux si le tableau contient un élément donné
console.log(array1.includes(2)); // Expected output : true

const mood = 'Happy!'; 
// repeat revoie une chaine de caractère à répétition
console.log('I\'m really ' + mood.repeat(3)); // Expected output : I'm really Happy!Happy!Happy!

const user = 'Mike'; 
// length compte le nombre de caractère dans une chaine de caractère
console.log(`${user} contient ${user.length} lettres.`); // Expected output : Mike contient 4 lettres.

const str = "Hi there"; 
// permet de déterminer si un tableau contient une valeur
const res = str.includes("Hello") &&  str.includes("Hi") && str.includes("there")
console.log(res); // Expected output : false 

console.log([10, 15, 20].includes(10, -1)); // Expected output : false 

console.log(['cat', 'dog', 'lion'].includes('lion', -1)); // Expected output : true 

const vide = ""; 
console.log('Je suis une variable vide donc je contient ' + vide.length); // Expected output : Je suis une variable vide donc je contient 0