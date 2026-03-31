
class ListHeaderComponent {
    get burgerButton() {
        return $('#react-burger-menu-btn')
    };

    get headerLogo() {
        return $('.app_logo')
    };

    get cartButton(){
        return $('.shopping_cart_link')
    };
};

module.exports = ListHeaderComponent;
