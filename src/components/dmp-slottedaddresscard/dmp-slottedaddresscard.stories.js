import { withKnobs, text } from '@storybook/addon-knobs';
import readme from './readme.md';

export default {
  title: 'Address card',
  parameters: {
    markdown: readme,
  },
  decorators: [withKnobs]
};

export const Default = () => `
  <dmp-slottedaddresscard phonenumberislink="true" lat="${text('lat', "32.1479602")}" lon="${text('lon', "-85.0162703")}">
    <span slot="image"><img src="images/Amy Edwards.jpg" /></span>
    <span slot="name">Amy Edwards</span>
    <div slot="address">1212 Omaha Dr, Montgomery, AL 36105, United States</div>
    <div slot="phonenumber">+1 334-280-0960</div>
    <div slot="email">amy.edwards@example.com</div>
    <div slot="block">
      <hr class="mt-4" />
      <strong>"The greatest glory in living lies not in never falling, but in rising every time we fall."</strong>
      <em>-Nelson Mandela</em>
      <hr />
    </div>
  </dmp-slottedaddresscard>
`;