const burgerMenuComponent = require("../components/common/burgerMenu.component")
const Inventory = require("../components/inventory/inventory.components")
const headerComponents = require("../components/common/header.component")


const burgerMenu = new burgerMenuComponent;
const inventory = new Inventory;
const header = new headerComponents;

class inventoryPage {
    constructor() {
        this.burgerMenu = burgerMenu
        this.inventory = inventory
        this.header = header
        // second inventory
    };

};

module.exports = inventoryPage;