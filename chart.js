import busMallProducts from './data/data.js';
import findByID from './utils.js';

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
            label: '# of Votes',
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