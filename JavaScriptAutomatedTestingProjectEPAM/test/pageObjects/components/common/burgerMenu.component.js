 
class burgerMenuComponent {
    item(param) {
        const selectors = {
            allitems : '#inventory_sidebar_link',
            about : '#about_sidebar_link',
            logout : '#logout_sidebar_link',
            resetAppState : '#reset_sidebar_link'
        };
        return $(selectors[param.toLowerCase()])
    };
};


module.exports = burgerMenuComponent;

