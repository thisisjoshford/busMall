//links product data from data.js
import busMallProducts from './data/data.js';
//links constructor routine from productArray
import BusMallProductArray from './data/productArray.js';
//imports findByID function
import findByID from './utils.js';
//grabs all of the radio tag input elements from DOM
const bmProductSelection = document.querySelectorAll('input');
let numberOfClicks = 0;
// //creates a variable that has all of the BusMall Products
const bmProducts = new BusMallProductArray(busMallProducts);
//calls generateRandomBM function to populate the page on load
generateRandomBM();
//adds event listener to each radio image button and log number of clicks and user selection
bmProductSelection.forEach((inputTag) => {
    inputTag.addEventListener('click', () => {
        //counts number of clicks
        numberOfClicks++;
        //creates local json variable that is grabbed from "session data" in local storage
        let json = localStorage.getItem('sessionData');
        //creates local sessionData container/variable
        let sessionData;
        //is there any json data? if so... lets convert from string to object via the parse command
        if (json) { sessionData = JSON.parse(json); }
        //if there is no json data aka session data on local storage... lets create an empty container
        else { sessionData = [];}
        //gets the product vote ID from the radio button input tag and compares it against the current session data array to see if this current selected item is already there... NOTE  *if I left the ID as a string in my meta data the parseInt function wouldn't be necessary*
        let productVote = findByID((parseInt(inputTag.value)), sessionData);
        console.log('product VOTE', productVote);
        //if the product that has been voted is not there (!) create an object with the name value pair of...
        if (!productVote) {
            productVote = {
                id: (parseInt(inputTag.value)),
                quantity: 1
            };
            //now push that data to the local product vote array
            sessionData.push(productVote);
            //otherwise increment the quantity key 1 of the existing key/value pair
        } else { productVote.quantity++;}
        //phew!!! we did all that work... now time to stringify it into the local json container / variable so we can push it to local storage
        json = JSON.stringify(sessionData);
        //update local storage with that work son!
        localStorage.setItem('sessionData', json);
        //now lets generate a new set of three random photos for the next user vote!
        generateRandomBM();
        console.log(sessionData);
        console.log('input ID', inputTag.value);
        console.log('number of clicks', numberOfClicks);
        // did the user click through 25 times?? if so... lets send 'em to the results page
        if (numberOfClicks >= 25) {
            window.location = 'results.html';
        }
    });
});
//this function generates three random unique ID's... matches them to corresponding data array value... then populates the results to the ODM 
function generateRandomBM() {
    const randomBM1 = bmProducts.getRandomProduct();
    //creates a second random product that will check if it matches with first...if kso re-create a random product
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
