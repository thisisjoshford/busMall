export default function findByID(ID, array) {
    for (let i = 0 ; i < array.length; i++) {
        const Product = array[i];
        if (Product.id === ID){
            return Product;
            
        }
    } }