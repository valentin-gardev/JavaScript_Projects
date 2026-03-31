//E2E test//
// 0. Open https://www.saucedemo.com
// 1. Login with standart_user
// 2. Add a specific product to the cart "Sauce Labs Backpack"
// 3. Navigate to the cart and validate the item present "Sauce Labs Backpack"
// 4. Proceed to checkout
// 5. Fill in the information form (First Name, Last Name, Zip)
// 6. Complete the checkout and validate the success message "Thank you for your order!"

const LoginPage = require('../pageObjects/pages/login.page');
const getUsers = require('./../pageObjects/userAccounts/users.userAccounts')
const InventoryPage = require('../pageObjects/pages/inventory.page')
const CartPage = require('../pageObjects/pages/cart.page')
const CheckoutPage = require('../pageObjects/pages/checkout.page')
const CheckoutComplete = require('../pageObjects/pages/checkoutComplete.page')

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const checkoutComplete = new CheckoutComplete();

describe("E2E flow test", () => {
    it("Checkout Flow", async() =>{
        // Open website: https://www.saucedemo.com
        await loginPage.open();

        // Get users
        const users = await getUsers();

        // Set username/password (standard_user/secret_sauce) and click login button.
        await loginPage.components.userNameWindow.setValue('standard_user');
        await loginPage.components.userNamePassword.setValue(users['standard_user']);
        await loginPage.components.loginButton.click();

        //Add 'Sauce Labs Backpack' to cart.
        await inventoryPage.inventory.itemAddButtons('sauce-labs-backpack').click();

        // Navigate to cart and validate that "Sauce Labs Backpack" is in cart. Check all items one by one in cart.
        await inventoryPage.header.cartButton.click();
        const itemToVerify = "Sauce Labs Backpack";
        const cartItems = await cartPage.cartComponents.itemsCart();
        await expect(cartItems).toHaveText(itemToVerify);

        // Proceed to checkout by clicking checkout button.
        await cartPage.cartComponents.checkout.click();

        //Fill information for FirstName, LastName, Zip. It can be random.
        await checkoutPage.checkOut.info('firstName').setValue('Michel');
        await checkoutPage.checkOut.info('lastName').setValue('Stone');
        await checkoutPage.checkOut.info('zip').setValue('4000');
        
        // Click continue, click finish and validate message for completion ("Thank you for your order!")
        await checkoutPage.checkOut.button('continue').click();
        await cartPage.cartComponents.finish.click();
        const validMessage = "Thank you for your order!";
        await expect(checkoutComplete.checkoutCompleteComp.text).toHaveText(validMessage)
        // await $(".complete-header").isDisplayed(validMessage);
        
    })

    it("Data Driven Logic - login tests", async() =>{
        // Open website: https://www.saucedemo.com
        await browser.url("https://www.saucedemo.com");
        // Getting Accepted Usernames from userAccounts
        const users = await getUsers();
        // Convert elements to string array
        // Test login with every useble username
        for(const user in users){
            await loginPage.components.userNameWindow.setValue(user);
            await loginPage.components.userNamePassword.setValue(users[user]);
            await loginPage.components.loginButton.click();
            try {
                const errorMessage = await $(".error-message-container")
                if (await errorMessage.isDisplayed()) {
                    throw new Error(await (errorMessage.getText()) + ' Username: ' + user)
                    
                };
            }catch(err) {
                throw err
            };
            // Reset to main page if login is successful
            await $("#react-burger-menu-btn").click();
            await inventoryPage.burgerMenu.item('logout').click();

        };
    
    });

});