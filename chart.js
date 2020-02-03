import busMallProducts from './data/data.js';
import findByID from './utils.js';
const returnButton = document.getElementById('returnButton');

const ctx = document.getElementById('chart').getContext('2d');

let json = localStorage.getItem('sessionData');
const sessionData = JSON.parse(json);
console.log(sessionData);

//create an empty container for the votes
const votes = [];
//create an empty container for the product ID
const productID = [];

//loop through the session data and for each item push the votes into the empty votes array, and for the products push into product ID array
sessionData.forEach(item => {
    votes.push(item.quantity);
    // find the id and match the productName
    let product = findByID(item.id, busMallProducts);
    productID.push(product.name);
});

const data = votes;
const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'red', 'blue', 'yellow', 'green', 'purple', 'orange','red', 'blue', 'yellow', 'green', 'purple', 'orange','red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: productID,
        datasets: [{
            label: 'Current Session Data',
            data: data,
            backgroundColor: labelColors
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//below is for all time data

const ctx2 = document.getElementById('chart2').getContext('2d');

let json2 = localStorage.getItem('allTimeData');
const allTimeData = JSON.parse(json2);
console.log(allTimeData);

//create an empty container for the votes
const votes2 = [];
//create an empty container for the product ID
const productID2 = [];

//loop through the session data and for each item push the votes2 into the empty votes2 array, and for the products push into product ID array
allTimeData.forEach(item => {
    votes2.push(item.quantity);
    // find the id and match the productName
    let product = findByID(item.id, busMallProducts);
    productID2.push(product.name);
});

const data2 = votes2;
const labelColors2 = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'red', 'blue', 'yellow', 'green', 'purple', 'orange','red', 'blue', 'yellow', 'green', 'purple', 'orange','red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: productID2,
        datasets: [{
            label: 'All Time Data',
            data: data2,
            backgroundColor: labelColors2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

returnButton.addEventListener('click', () => {
    localStorage.removeItem('sessionData');
});
