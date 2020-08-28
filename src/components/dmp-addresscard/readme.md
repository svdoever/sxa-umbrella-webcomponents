# dmp-addresscard

Address Card component implemented using attributes, does not work for SEO.

The component can be used as follows:

```html
<dmp-addresscard 
  imgsrc="images/Amy Edwards.jpg" 
  name="Amy Edwards"
  address="1212 Omaha Dr, Montgomery, AL 36105, United States" 
  lat="32.1479602" lon="-85.0162703"
  email="amy.edwards@example.com" phonenumber="+1 334-280-0960"  
  phonenumberislink="true" 
  addressislink="true">
	<hr class="mt-4" />
	<strong>"The greatest glory in living lies not in never falling, 
            but in rising every time we fall."</strong>
	<em>-Nelson Mandela</em>
	<hr/>
</dmp-addresscard>
```
All attributes are optional.


<!-- Auto Generated Below -->


## Properties

| Property            | Attribute           | Description                                                                    | Type      | Default     |
| ------------------- | ------------------- | ------------------------------------------------------------------------------ | --------- | ----------- |
| `address`           | `address`           | Optional. Full address of the subject                                          | `string`  | `undefined` |
| `addressIslink`     | `addressislink`     | Optional: Make the address a link for openin new window in Google maps if true | `boolean` | `undefined` |
| `email`             | `email`             | Optional. E-mail address of the subject                                        | `string`  | `undefined` |
| `imgsrc`            | `imgsrc`            | Optional. (Relative) url to the image to show on the card                      | `string`  | `undefined` |
| `lat`               | `lat`               |                                                                                | `string`  | `undefined` |
| `lon`               | `lon`               | Optional: Longitude of the location                                            | `string`  | `undefined` |
| `name`              | `name`              | Optional. Full name of the subject                                             | `string`  | `undefined` |
| `phonenumber`       | `phonenumber`       | Optional. Phonenumber of the subject                                           | `string`  | `undefined` |
| `phonenumberIslink` | `phonenumberislink` | Optional: Make the phonenumber a link for dialing out if true                  | `boolean` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
