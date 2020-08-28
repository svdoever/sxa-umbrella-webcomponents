import { Prop, Element, Component, ComponentInterface, Host, h, State } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'dmp-slottedaddresscard',
  shadow: false
})
export class DmpSlottedaddresscard implements ComponentInterface {
  /** Optional: Make the phonenumber a link for dialing out if true */
  @Prop({ attribute: 'phonenumberislink' }) phonenumberIslink: boolean;
  /** Optional: Make the address a link for openin new window in Google maps if true */
  @Prop({ attribute: 'addressislink' }) addressIslink: boolean;
  /** Optional: Lattitude of the location */
  @Prop() lat: string;
  /** Optional: Longitude of the location */
  @Prop() lon: string;

  imgDivElement!: HTMLDivElement;

  @State() showLocation: boolean = false;

  @Element() hostElement: HTMLStencilElement;

  hasImage: boolean;

  componentWillLoad() {
    this.hasImage = !!this.hostElement.querySelector('[slot="image"]');
  }

  private handleFlipClick = () => {
    this.showLocation = !this.showLocation;
  };

  private handleAddressClick = () => {
    let address = (this.hostElement.querySelector('[slot="address"]') as HTMLElement)?.innerHTML;
    if (address) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
    }
  };

  render() {
    let name = (this.hostElement.querySelector('[slot="name"]') as HTMLElement)?.innerHTML;
    
    return (
      <Host>
        <div class="block bg-white rounded-lg shadow-xl p-6 overflow-hidden m-2">
          <div class={this.showLocation ? 'hidden' : ''}>
            <div class="md:flex">
              <div
                ref={el => (this.imgDivElement = el as HTMLDivElement)}
                hidden={!this.hasImage}
                class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 overflow-hidden"
              >
                <slot name="image" />
              </div>
              <div class="text-center md:text-left">
                <h2 class="text-2xl">
                  <slot name="name" />
                </h2>
                {this.addressIslink ? (
                  <div class="text-purple-500 cursor-pointer underline" onClick={this.handleAddressClick}>
                    <slot name="address" />
                  </div>
                ) : (
                  <div class="text-red-500">
                    <slot name="address" />
                  </div>
                )}
                <div class="text-gray-600">
                  <slot name="email" />
                </div>
                {this.phonenumberIslink ? (
                  <a href="tel:{this.phonenumber}">
                    <div class="text-gray-600 underline">
                      <slot name="phonenumber" />
                    </div>
                  </a>
                ) : (
                  <div class="text-gray-600">
                    <slot name="phonenumber" />
                  </div>
                )}
              </div>
            </div>
            <div class="block">
              <slot name="block" />
            </div>
            {this.lat && this.lon && (
              <div class="mt-4">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={this.handleFlipClick}
                >
                  Show location
                </button>
              </div>
            )}
          </div>
          {this.showLocation && this.lat && this.lon && (
            <div class="text-center md:text-left">
              <h2 class="text-2xl">{name? `Location of ${name}` : 'Location'}</h2>
              <img
                height={200}
                width={400}
                src={`https://atlas.microsoft.com/map/static/png?api-version=1.0&width=400&height=200&subscription-key=YB-HvmHxVoholF2COBlkb92ai4iT_yIdJ20umQFlx0o&center=${this.lon},${this.lat}&pins=default||${this.lon} ${this.lat}`}
              />

              <button
                class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={this.handleFlipClick}
              >
                Show card
              </button>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
