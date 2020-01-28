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

console.log(randomBM1.id);
console.log(randomBM2.id);
console.log(randomBM3.id);
