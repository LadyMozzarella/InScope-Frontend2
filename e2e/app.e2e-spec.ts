import { InscopeFrontEndPage } from './app.po';

describe('inscope-front-end App', () => {
  let page: InscopeFrontEndPage;

  beforeEach(() => {
    page = new InscopeFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
