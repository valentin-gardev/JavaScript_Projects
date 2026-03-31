const headerComponents = require("../components/common/header.component")
const CheckoutComp = require("../components/checkout/checkout.components")

const header = new headerComponents;
const checkOut = new CheckoutComp;


class CheckoutPage {
    constructor() {
        this.header = header
        this.checkOut = checkOut
    }
};


module.exports = CheckoutPage;