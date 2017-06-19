import { Form2Page } from './app.po';

describe('form2 App', () => {
  let page: Form2Page;

  beforeEach(() => {
    page = new Form2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
