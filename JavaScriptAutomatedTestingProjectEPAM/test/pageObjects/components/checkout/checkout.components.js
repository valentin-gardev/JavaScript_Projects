
class CheckoutComp {
    button(selected) {
        const buttons = {
            cancel : '#cancel',
            continue : '#continue'
        };
        return $(buttons[selected])
    };
    
    info(selected){
        const inputs = {
            firstName : '#first-name',
            lastName : '#last-name',
            zip : '#postal-code'
        }
        return $(inputs[selected])
    };
};



module.exports = CheckoutComp