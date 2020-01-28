//links product data from data.js
import busMallProducts from './data/data.js';
//links constructor routine from productArray
import BusMallProductArray from './data/productArray.js';

//grabs all of the radio tag input elements from DOM
const bmProductSelection = document.querySelectorAll('input');

let numberOfClicks = 0;
//adds event listener to each radio image button
bmProductSelection.forEach((inputTag) => {
    inputTag.addEventListener('click', () => {
        numberOfClicks++;
        generateRandomBM();
        console.log(inputTag.value);
        console.log(numberOfClicks);
    });
});

//creates a variable that has all of the BusMall Products
const bmProducts = new BusMallProductArray(busMallProducts);

var { randomBM1object, randomBM2object, randomBM3object, randomBM1, randomBM2, randomBM3 } = generateRandomBM();
//this function generates three random unique ID's... matches them to corresponding data array value... then populates the results to the ODM 
function generateRandomBM() {
    const randomBM1 = bmProducts.getRandomProduct();
    //creates a second random product that will check if it matches with first...if so re-create a random product
    let randomBM2 = bmProducts.getRandomProduct();
    while (randomBM1.id === randomBM2.id) {
        randomBM2 = bmProducts.getRandomProduct();
    }
    //same as above routine, but checks against random1 OR (||) random2
    let randomBM3 = bmProducts.getRandomProduct();
    while (randomBM1.id === randomBM3.id || randomBM2.id === randomBM3.id) {
        randomBM3 = bmProducts.getRandomProduct();
    }
    //creates variables with object containers 
    const randomBM1object = (bmProducts.getById(randomBM1.id));
    const randomBM2object = (bmProducts.getById(randomBM2.id));
    const randomBM3object = (bmProducts.getById(randomBM3.id));
    //populates the DOM with selected name, image, and value id (for data)
    const bmProductName1 = document.getElementById('bmProductName1');
    bmProductName1.textContent = randomBM1object.name;
    const bmProductImage1 = document.getElementById('randomImg1');
    bmProductImage1.src = randomBM1object.image;
    const bmProductValue1 = document.getElementById('randomInput1');
    bmProductValue1.value = randomBM1object.id;
   
    const bmProductName2 = document.getElementById('bmProductName2');
    bmProductName2.textContent = randomBM2object.name;
    const bmProductImage2 = document.getElementById('randomImg2');
    bmProductImage2.src = randomBM2object.image;
    const bmProductValue2 = document.getElementById('randomInput2');
    bmProductValue2.value = randomBM2object.id;
    
    const bmProductName3 = document.getElementById('bmProductName3');
    bmProductName3.textContent = randomBM3object.name;
    const bmProductImage3 = document.getElementById('randomImg3');
    bmProductImage3.src = randomBM3object.image;
    const bmProductValue3 = document.getElementById('randomInput3');
    bmProductValue3.value = randomBM3object.id;
    
    return { randomBM1object, randomBM2object, randomBM3object, randomBM1, randomBM2, randomBM3 };
}