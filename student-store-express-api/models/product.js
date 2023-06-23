//Get all cars

const fs = require('fs');
let myObject = fs.readFileSync('./data/db.json', 'utf8');
let data = JSON.parse(myObject);
let products = data.products;


const dataModel = {


getAllProds: () => {
    return products;
},
    
    //Get car by ID
getProdById: (id) => {
    return products.find((product) => product.id === id);
}

}

module.exports = dataModel;