import BasePage from "./base.page.ts";
import selectors from "./utils/selectors.json" with {type:"json"};

/*const selectors = {
    JOB_SELECTOR:'//select[contains(@class,"job-select-{string}")]',
    JOB_OPTION:`//option[@value="{locOrDepart}_{option}"]`,
    OPEN_POSITIONS:'//div[contains(@class,"location_{loc}") and contains(@class,"depart_{dept}")]',
    OPEN_POSITIONS_DISPLAYED_READ_MORE:'//div[contains(@class,"careers__open-positions__position") and not(contains(@class,"d-none"))]//a[text()="Read More"]',
} */


class OpenPositionsPage extends BasePage{

async selectOptionFromDropDown(locOrDepart:string,option:string){
 await this.clickOnElement(selectors.openPostionsPage.JOB_SELECTOR.replace('{string}',locOrDepart));
 await this.clickOnElement(selectors.openPostionsPage.JOB_OPTION.replace('{locOrDepart}',locOrDepart).replace('{option}',option));
}

async assertPositionsWithLocationAndDepartVisible(depart:string,location:string){
  await $$(selectors.openPostionsPage.OPEN_POSITIONS.replace('{loc}',location).replace('{dept}',depart)).forEach(async (position)=>{
    await expect(position).toBeDisplayed();
  })
}

async clickReadMoreForFirstPosition(){
    await $$(selectors.openPostionsPage.OPEN_POSITIONS_DISPLAYED_READ_MORE)[1].click();
}


}

export default new OpenPositionsPage();