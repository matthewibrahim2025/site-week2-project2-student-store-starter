const fs = require("fs");
let myObject = fs.readFileSync("./data/db.json", "utf8");
let data = JSON.parse(myObject);
let products = data;

const dataModel = {
  getAllProds: () => {
    return products;
  },

  getProdById: (id) => {
    return products.products.find((product) => product.id === id);
  },

  getReceipts: () => {
    let receiptObj = products.purchases[products.purchases.length - 1];
    return (receiptObj.receipt);
    // return products.purchases[-1].receipt;
  },

  addToPurchase: (shoppingCart) => {
    let purchases = data.purchases;
    purchases.push(shoppingCart);
    return purchases;
  },
};

module.exports = dataModel;
