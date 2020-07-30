import { Component, ComponentInterface, Host, h, State } from '@stencil/core';
import { Prop } from "@stencil/core";

@Component({
  tag: 'dmp-slottedaddresscard',
  shadow: false,
})
export class DmpSlottedaddresscard implements ComponentInterface {
  /** Make the phonenumber a link for dialing out if true */
  @Prop() phonenumberislink: boolean = false;
  @Prop() lat: string;
  @Prop() lon: string;

  @State() showLocation: boolean = false;

  private handleLocationClick = () => {
    this.showLocation = !this.showLocation;
    console.log('test123', this.showLocation);
  }

  render() {
    return (
      <Host>
        <div class="block bg-white rounded-lg shadow-xl p-6 overflow-hidden m-2">
          <div class={this.showLocation ? "hidden" : ""}>
            <div class="md:flex">
              <div class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 overflow-hidden">
                <slot name="image"/>
              </div>
              <div class="text-center md:text-left">
                <h2 class="text-2xl"><slot name="name"/></h2> 
                <div class="text-purple-500"><slot name="address"/></div>
                <div class="text-gray-600"><slot name="email"/></div>
                {this.phonenumberislink ? (
                  <a href="tel:{this.phonenumber}">
                    <div class="text-gray-600 underline"><slot name="phonenumber"/></div>
                  </a>
                ) : (
                  <div class="text-gray-600"><slot name="phonenumber"/></div>
                )}
              </div>
            </div>
            <div class="block"><slot name="block"/></div>
            <div class="mt-4">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.handleLocationClick}>
                Show location
              </button>
            </div>
          </div>
          {this.showLocation &&
            <div>
              <img height={200} width={400} src={`https://atlas.microsoft.com/map/static/png?api-version=1.0&width=400&height=200&subscription-key=YB-HvmHxVoholF2COBlkb92ai4iT_yIdJ20umQFlx0o&center=${this.lon},${this.lat}&pins=default||${this.lon} ${this.lat}`} />

              <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.handleLocationClick}>
                Show address
              </button>
            </div>
          }
        </div>
      </Host>
    );
  }
}
