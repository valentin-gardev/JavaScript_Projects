/**
 * 1. visit www.epam.com
 * 2. validate the page's title
 */
describe("first e2e test suite", () => {

  it("should open www.epam.com", async () => {
    const expectedTitle = "EPAM | Software Engineering & Product Development Services";

    await browser.url("https://www.epam.com");
    await expect(browser).toHaveTitle(expectedTitle)
    // console.log(await browser.getTitle());
  })
  it("Should open hamburger menu", async() =>{
    await browser.url("/");
    await $(".hamburger-menu__button").click();
    await expect($("//div[@class='os-content']")).toBeDisplayed();
  });

  it.only("should navigate to Services page", async () =>{
    await browser.url("/");
    // await browser.maximizeWindow();
    const links = await $$('.top-navigation__item-link');
    
    await links[0].click();
    await expect(browser).toHaveTitle("Services | EPAM");
  });

});