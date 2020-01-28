//links product data from data.js
import busMallProducts from './data/data.js';
//links constructor routine from productArray
import BusMallProductArray from './data/productArray.js';

//creates a variable that has all of the BusMall Products
const bmProducts = new BusMallProductArray(busMallProducts);
console.log(bmProducts);


const randomBusMallProduct1 = bmProducts.getRandomProduct();
console.log('random1', randomBusMallProduct1);


const randomBusMallProduct2 = bmProducts.getRandomProduct();
console.log('random2', randomBusMallProduct2);

const randomBusMallProduct3 = bmProducts.getRandomProduct();
console.log('random3', randomBusMallProduct3);