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

    // remove a product from the array
    removeProductsById(busMallProductId) {
        this.busMallProducts.forEach((busMallProducts, i) => {
            if (busMallProductId === busMallProducts.id) {
                this.busMallProducts.splice(i, 1);
            }
        });
    }

    // is there a product left to compare? 
    hasAnyProducts() {return this.busMallProducts.length;}

    // generates a random product 
    getRandomProduct() {
        const randomProduct = Math.floor(Math.random() * this.busMallProducts.length);

        return this.busMallProducts[randomProduct];
    }
}