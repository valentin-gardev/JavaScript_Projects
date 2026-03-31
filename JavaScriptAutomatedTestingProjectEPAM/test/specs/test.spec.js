//E2E test//
// 0. Open https://www.saucedemo.com
// 1. Login with standart_user
// 2. Add a specific product to the cart "Sauce Labs Backpack"
// 3. Navigate to the cart and validate the item present "Sauce Labs Backpack"
// 4. Proceed to checkout
// 5. Fill in the information form (First Name, Last Name, Zip)
// 6. Complete the checkout and validate the success message "Thank you for your order!"

describe("E2E flow test", () => {
    
    it("Open www.saucedemo.com. Fill in Username: standard_user, and Password: secret_sauce. Click on Login button.", async() =>{
        // Open the website: https://www.saucedemo.com
        await browser.url("https://www.saucedemo.com");
        // Set 
        
        const LoginInformation = await $$(".input_error.form_input")
        await LoginInformation[0].setValue("standard_user")
        await LoginInformation[1].setValue("secret_sauce")
        await $(".submit-button.btn_action").click()
    });
    
    it("Add 'Sauce Labs Backpack' to cart", async() =>{
        await $("#add-to-cart-sauce-labs-backpack").click()
        // await $("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    });
    // Navigate to cart and validate the item present, must have "Sauce Labs Backpack". Check all items one by one in cart
    it("Select and click the shopping-cart, validate item 'Sauce Labs Backpack'", async() =>{
        await $(".shopping_cart_link").click();
        const checkItem = "Sauce Labs Backpack";
        const cartItems = await $$(".inventory_item_name");
        await expect(cartItems).toHaveText(checkItem);
    });
    it("Proceed to checkout by clicking checkout button", async() =>{
        await $("#checkout").click()
    })

    it("Fill information for: FirstName, LastName, Zip", async()=>{
        await $("#first-name").setValue("Michel")
        await $("#last-name").setValue("Stone")
        await $("#postal-code").setValue("4000")

    })
    it("Validate message after order completing order", async() =>{
        await $("#continue").click()
        await $("#finish").click()
        const validMessage = "Thank you for your order!"
        await expect($(".complete-header")).toHaveText(validMessage)
    })
    
    });
