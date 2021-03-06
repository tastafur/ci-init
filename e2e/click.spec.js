describe('test navigation webapp', function testExample() {
  let page;
  this.timeout(30000);

  before (async () => {
    page = await browser.newPage();
    page.setExtraHTTPHeaders({ 'upgrade-insecure-requests': '0' });
    await page.goto('http://localhost:8080');
  });

  after (async () => {
    await page.close();
  });

  beforeEach (async () => {
    await page.waitFor(1500);
  });


  it('should find button android and click', async () => {
    const BUTTON_ANDROID_SELECTOR = '.button-0';

    await page.waitFor(BUTTON_ANDROID_SELECTOR);

    const buttonElement = await page.$(BUTTON_ANDROID_SELECTOR);

    expect(buttonElement).to.not.be.null;

    await buttonElement.click();
  });

  it('should find button back and return to list view', async () => {
    const BUTTON_BACK_SELECTOR = '.button-back';

    await page.waitFor(BUTTON_BACK_SELECTOR);

    const buttonElement = await page.$(BUTTON_BACK_SELECTOR);

    expect(buttonElement).to.not.be.null;

    await buttonElement.click();
  });

  it('should find button iOS and click', async () => {
    const BUTTON_IOS_SELECTOR = '.button-1';

    await page.waitFor(BUTTON_IOS_SELECTOR);

    const buttonElement = await page.$(BUTTON_IOS_SELECTOR);

    expect(buttonElement).to.not.be.null;

    await buttonElement.click();
  });
});
