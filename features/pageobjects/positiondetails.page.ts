import BasePage from "./base.page.ts";
import selectors from "./utils/selectors.json" with {type:"json"};
/*const selectors={
    GREENHOSE_IFRAME:'iframe[title="Greenhouse Job Board"]'
} */

class PositionDetails extends BasePage{

    async validateGreenHouseIframe(){
        await super.assertElementIsDisplayed(selectors.positionDetailsPage.GREENHOSE_IFRAME);
    }

}

export default new PositionDetails();