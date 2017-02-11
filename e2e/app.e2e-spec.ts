import { HearthstoneNGPage } from './app.po';

describe('hearthstone-ng App', function() {
  let page: HearthstoneNGPage;

  beforeEach(() => {
    page = new HearthstoneNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
