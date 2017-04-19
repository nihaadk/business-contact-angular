import { FirebaseContactsDemoPage } from './app.po';

describe('firebase-contacts-demo App', () => {
  let page: FirebaseContactsDemoPage;

  beforeEach(() => {
    page = new FirebaseContactsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
