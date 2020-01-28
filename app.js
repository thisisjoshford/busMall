//links product data from data.js
import busMallProducts from './data/data.js';
//links constructor routine from productArray
import BusMallProductArray from './data/productArray.js';



//creates a variable that has all of the BusMall Products
const bmProducts = new BusMallProductArray(busMallProducts);

//creating a random product
const randomBM1 = bmProducts.getRandomProduct();
//creates a second random product that will check if it matches with first...if so re-create a random product
let randomBM2 = bmProducts.getRandomProduct();
while (randomBM1.id === randomBM2.id) {
    randomBM2 = bmProducts.getRandomProduct();}
//same as above routine, but checks against random1 OR (||) random2
let randomBM3 = bmProducts.getRandomProduct();
while (randomBM1.id === randomBM3.id || randomBM2.id === randomBM3.id) {
    randomBM3 = bmProducts.getRandomProduct();
}
//creates variables with object containers 
const randomBM1object = (bmProducts.getById(randomBM1.id));
const randomBM2object = (bmProducts.getById(randomBM2.id));
const randomBM3object = (bmProducts.getById(randomBM3.id));

const bmProductImage1 = document.getElementById('randomImg1');
bmProductImage1.src = randomBM1object.image;
bmProductImage1.width = 300;

const bmProductImage2 = document.getElementById('randomImg2');
bmProductImage2.src = randomBM2object.image;
bmProductImage2.width = 300;


const bmProductImage3 = document.getElementById('randomImg3');
bmProductImage3.src = randomBM3object.image;
bmProductImage3.width = 300;

console.log(randomBM1object.image);
console.log(randomBM2object.image);
console.log(randomBM3object.image);
console.log(randomBM1.id);
console.log(randomBM2.id);
console.log(randomBM3.id);
