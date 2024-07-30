import BasePage from "./base.page.ts";
import Footer from './components/footer.component.ts'
import selectors from "./utils/selectors.json" with {type:"json"};

/*const selectors = {
    ACCEPT_COOKIES_BTN:'//a[text()="Allow all cookies"]'
} */

class HomePage extends BasePage{
    footer:Footer;
    
    constructor(){
        super();
        this.footer= new Footer();
    }

    public open () {
        return super.open('');
    }

    async acceptCookies(){
        await super.clickOnElement(selectors.homePage.ACCEPT_COOKIES_BTN);
        await expect($(selectors.homePage.ACCEPT_COOKIES_BTN)).not.toBeDisplayed();
    }

}

export default new HomePage();