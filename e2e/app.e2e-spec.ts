import { ChessClubPage } from './app.po';

describe('chess-club App', function() {
  let page: ChessClubPage;

  beforeEach(() => {
    page = new ChessClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
