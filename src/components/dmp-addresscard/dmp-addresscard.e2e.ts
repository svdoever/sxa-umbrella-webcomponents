import { newE2EPage } from '@stencil/core/testing';

describe('dmp-addresscard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dmp-addresscard></dmp-addresscard>');

    const element = await page.find('dmp-addresscard');
    expect(element).toHaveClass('hydrated');
  });
});
