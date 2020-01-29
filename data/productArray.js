export default class BusMallProductArray {
    constructor(busMallProducts) {this.busMallProducts = busMallProducts.slice();}

    getBMproducts() {return this.busMallProducts;}

    // function that matches ID to Product
    getById(busMallProductId) {
        let productMatch;
    //loops through all bus mall products
        this.busMallProducts.forEach(busMallProducts => {
            // compare the id with busMallProducts
            if (busMallProductId === busMallProducts.id) {
                productMatch = busMallProducts;
            }
        });
        return productMatch;
    }
    // is there a product left to compare? 
    hasAnyProducts() {return this.busMallProducts.length;}

    // generates a random product 
    getRandomProduct() {
        const randomProduct = Math.floor(Math.random() * this.busMallProducts.length);
        return this.busMallProducts[randomProduct];
    }
}