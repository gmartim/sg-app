import { SgAppPage } from './app.po';

describe('sg-app App', () => {
  let page: SgAppPage;

  beforeEach(() => {
    page = new SgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
