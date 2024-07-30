import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`/${path}`)
    }

    async waitElementIsLoaded(baseElement,locator:string){
        let elements;
        await driver.waitUntil(async()=>{
            if(baseElement){
                elements =await baseElement.$$(locator);
            }else {
                elements=await $$(locator);
            }
            return elements.length>0;
        },{timeoutMsg:'Element or page is not correctly loaded'})
    }

    async returnCurrentUrl(){
      return await driver.getUrl();
    }

    async clickOnElement(locator){
        const el = await $(locator);
        await el.scrollIntoView();
        await el.click();
    }

    async clickOnTheLinkByText(text:string){
        const link = $('//a[text()="'+text+'"]');
        await link.scrollIntoView();
        await link.click();
    }


    async assertElementIsDisplayed(locator:string){
        expect($(locator)).toBeDisplayed();
    }


}
