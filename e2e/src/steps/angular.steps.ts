import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I view the "([^"]*)"$/, async url => {
  await page.navigateTo(url);
});

When(/^I click on button$/, async () => {
  page.clickOnElement('.button.hero-cta');
});

When(/^I wait for (\d+) ms$/, (timeToWait, callback) => {
  setTimeout(callback, timeToWait);
});

Then(/the page title should be "([^"]*)"$/, async text => {
  let pageTile = await page.getPageTitle();
  expect(pageTile).to.equal(text);
});
