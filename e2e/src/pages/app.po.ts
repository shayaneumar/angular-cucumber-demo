import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url) {
    return browser.get(url);
  }

  async getPageTitle() {
    return await browser.getTitle();
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  clickOnElement(css) {
    element(by.css(css)).click();
  }
}
