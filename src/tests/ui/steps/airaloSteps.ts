import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AiraloPage } from '../pages/AiraloPage';
import { testContext } from '../SharedState';
import testData from '../testData/testData.json';


let airaloPage: AiraloPage;

Given('I navigate to the Airalo homepage', async () => {
  airaloPage = new AiraloPage(testContext.page!);
  await airaloPage.navigateToHome();
});


When('I search for the destination', async () => {
    await airaloPage.searchForCountry(testData.destination);
  });


  When('I select Japan from the Local section in autocomplete', async () => {
    await airaloPage.selectJapanFromSuggestions();
  });
  
  
  When('I click Buy Now on the paid eSIM card', async () => {
    await airaloPage.clickBuyNowOnCard();
  });


  Then('I should see a popup with the following details', async () => {
    await airaloPage.verifyPopupDetails({
      title: testData.cardDetails.title,
      coverage: testData.cardDetails.coverage,
      data: testData.cardDetails.data,
      validity: testData.cardDetails.validity,
      price: testData.cardDetails.price
    });
  });