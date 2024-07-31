import BasePage from "./base.page.ts";
import selectors from "./utils/selectors.json" with {type:"json"};

class PositionDetails extends BasePage{

    async validateGreenHouseIframe(){
        await super.assertElementIsDisplayed(selectors.positionDetailsPage.GREENHOSE_IFRAME);
    }

}

export default new PositionDetails();