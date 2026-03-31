const headerComponents = require("../components/common/header.component")
const CartComponents = require("../components/cart/cart.components")

const header = new headerComponents;
const cartComponents = new CartComponents

class CartPage {
    constructor() {
        this.header = new headerComponents;
        this.cartComponents = new CartComponents;
    };
};


module.exports = CartPage