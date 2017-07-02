import { EricaMasterSitePage } from './app.po';

describe('erica-master-site App', () => {
  let page: EricaMasterSitePage;

  beforeEach(() => {
    page = new EricaMasterSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
