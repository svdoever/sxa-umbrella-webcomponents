import { newSpecPage } from '@stencil/core/testing';
import { DmpAddresscard } from './dmp-addresscard';

describe('dmp-addresscard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DmpAddresscard],
      html: `<dmp-addresscard></dmp-addresscard>`,
    });
  });
});
