import { CliProjPage } from './app.po';

describe('cli-proj App', function() {
  let page: CliProjPage;

  beforeEach(() => {
    page = new CliProjPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cli-proj works!');
  });
});
