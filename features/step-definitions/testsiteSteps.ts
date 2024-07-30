import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../pageobjects/home.page.ts';
import assert from 'assert';
import careersPage from '../pageobjects/careers.page.ts';
import openpositionsPage from '../pageobjects/openpositions.page.ts';
import positiondetailsPage from '../pageobjects/positiondetails.page.ts';

const pages = {
    home:homePage,
}

//---------------------Precondition----------------------------------------
Given(/^the user opens "(.*)" page$/, async (page)=>{
    await pages[page].open();
})


//--------------------Actions----------------------------------------------


When(/^the user accepts cookies$/,async() =>{
    await homePage.acceptCookies();
})

When(/^the user clicks on the "(.*)" link in the footer$/,async (menuItem:string)=>{
    await homePage.footer.clickOnFooterMenuItem(menuItem);
})


When(/^the user clicks on "(.*)" link$/,async (text)=>{
    await careersPage.clickOnTheLinkByText(text);
})

When(/^the user selects option "(.*)" from "(.*)" drop down$/,async (option,depOrLoc)=>{
   await openpositionsPage.selectOptionFromDropDown(depOrLoc,option);
})

When(/^the user clicks on the "Read More" link for any open position$/,async()=>{
    await openpositionsPage.clickReadMoreForFirstPosition();
})


//-------------------------------Assertions-----------------------------------------------


Then(/^the user is on the "(.*)" page$/,async (page:string)=> {
    assert.equal((await homePage.returnCurrentUrl()).includes(page),true,"The page "+page+ " was not opened");
})

Then(/^the user sees list of "(.*)" positions available in "(.*)"$/,async (depart,location)=>{
    await openpositionsPage.assertPositionsWithLocationAndDepartVisible(depart,location);
})

Then(/^the user sees greenhouse iframe is present$/,async ()=>{
    await positiondetailsPage.validateGreenHouseIframe();
})