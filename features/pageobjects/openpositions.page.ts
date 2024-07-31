import BasePage from "./base.page.ts";
import selectors from "./utils/selectors.json" with {type:"json"};


class OpenPositionsPage extends BasePage{

/*
 implementation step  When(the user selects option "Madrid" from "location" drop down)
 later, this method can be moved to BasePage, as we have more DropDowns on the website
*/
async selectOptionFromDropDown(locOrDepart:string,option:string){
 await this.clickOnElement(selectors.openPostionsPage.JOB_SELECTOR.replace('{string}',locOrDepart));
 await this.clickOnElement(selectors.openPostionsPage.JOB_OPTION.replace('{locOrDepart}',locOrDepart).replace('{option}',option));
}


/*
  assertPositionsWithLocationAndDepartVisible - this assertions is only aailable for the OpenPositionsPage
  We are not going to implement it anywhere else
*/
async assertPositionsWithLocationAndDepartVisible(depart:string,location:string){
  await $$(selectors.openPostionsPage.OPEN_POSITIONS.replace('{loc}',location).replace('{dept}',depart)).forEach(async (position)=>{
    await expect(position).toBeDisplayed();
  })
}

/*
  As we don't have common operation to click on the First element from an array of Elements
  we are handling it right on the page
*/
async clickReadMoreForFirstPosition(){
    await $$(selectors.openPostionsPage.OPEN_POSITIONS_DISPLAYED_READ_MORE)[1].click();
}

}

export default new OpenPositionsPage();