# dmp-slottedaddresscard

Address Card component implemented using slots, optimized for SEO.

The component can be used as follows:

```html
<dmp-slottedaddresscard 
  phonenumberislink="true" 
  addressislink="true" 
  lat="32.1479602" lon="-85.0162703">
	<div slot="image"><img src="images/Amy Edwards.jpg" /></div>
	<div slot="name">Amy Edwards</div>
	<div slot="address">1212 Omaha Dr, Montgomery, AL 36105, United States</div>
	<div slot="phonenumber">+1 334-280-0960</div>
	<div slot="email">amy.edwards@example.com</div>
	<div slot="block">
	  <hr class="mt-4" />
	  <strong>"The greatest glory in living lies not in never falling, 
              but in rising every time we fall."</strong>
	  <em>-Nelson Mandela</em>
	  <hr />
	</div>
</dmp-slottedaddresscard>
```
All slots are optional.

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute           | Description                                                                    | Type      | Default     |
| ------------------- | ------------------- | ------------------------------------------------------------------------------ | --------- | ----------- |
| `addressIslink`     | `addressislink`     | Optional: Make the address a link for openin new window in Google maps if true | `boolean` | `undefined` |
| `lat`               | `lat`               | Optional: Lattitude of the location                                            | `string`  | `undefined` |
| `lon`               | `lon`               | Optional: Longitude of the location                                            | `string`  | `undefined` |
| `phonenumberIslink` | `phonenumberislink` | Optional: Make the phonenumber a link for dialing out if true                  | `boolean` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
