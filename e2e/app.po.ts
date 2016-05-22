export class CliProjPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cli-proj-app h1')).getText();
  }
}
