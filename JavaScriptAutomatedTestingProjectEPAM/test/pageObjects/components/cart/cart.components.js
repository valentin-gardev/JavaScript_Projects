
class Cart {

    itemsCart() {
        return $$(".inventory_item_name")
    };

    itemRemove(buttonItem) {
        return $(`#${buttonItem}`)
    };

    get backToInventory() {
        return $("#continue-shopping")
    };

    get checkout() {
        return $("#checkout")
    };

    get finish() {
        return $('#finish')
    }
};

module.exports = Cart