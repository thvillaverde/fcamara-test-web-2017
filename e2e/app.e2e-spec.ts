import { FcamaraAppPage } from './app.po';

describe('fcamara-app App', function() {
  let page: FcamaraAppPage;

  beforeEach(() => {
    page = new FcamaraAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
