import BasePage from "../base.page.ts";

const selectors = {
    MENU_ITEM:'//h3/following-sibling::div//li/a[text()="{subItem}"]'
}

export default class Footer extends BasePage{


   async clickOnFooterMenuItem(subItem:string){
     await super.clickOnElement(selectors.MENU_ITEM.replace('{subItem}',subItem));
   }

}


   