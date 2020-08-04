import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import readme from './readme.md';

export default {
  title: 'Slotted Address card',
  parameters: {
    notes: { readme },
  },
  decorators: [withKnobs]
};

export const Full = () => html`
  <dmp-slottedaddresscard phonenumberislink="true" addressislink="true" lat="${text('lat', "32.1479602")}" lon="${text('lon', "-85.0162703")}">
    <div slot="image"><img src="Amy Edwards.jpg" /></div>
    <div slot="name">Amy Edwards</div>
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

export const NameOnly = () => `
  <dmp-slottedaddresscard>
    <div slot="name">Amy Edwards</div>
  </dmp-slottedaddresscard>
`;

export const NameWithLocation = () => `
  <dmp-slottedaddresscard lat="${text('lat', "32.1479602")}" lon="${text('lon', "-85.0162703")}">
    <div slot="name">Amy Edwards</div>
  </dmp-slottedaddresscard>
`;

export const AddressIsLink = () => `
  <dmp-slottedaddresscard addressislink="true" lat="${text('lat', "32.1479602")}" lon="${text('lon', "-85.0162703")}">
    <div slot="name">Amy Edwards</div>
    <div slot="address">1212 Omaha Dr, Montgomery, AL 36105, United States</div>
  </dmp-slottedaddresscard>
`;


