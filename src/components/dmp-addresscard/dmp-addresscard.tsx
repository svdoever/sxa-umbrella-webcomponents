import { Component, ComponentInterface, Host, h, State } from "@stencil/core";
import { Prop } from "@stencil/core";

@Component({
  tag: "dmp-addresscard",
  shadow: false,
})
/**
 * A Digital Marketing Platform address card eith support for adding additional content.
 */
export class DmpAddresscard implements ComponentInterface {
  /** Optional. (Relative) url to the image to show on the card */
  @Prop() imgsrc: string;
  /** Optional. Full name of the subject */
  @Prop() name: string;
  /** Optional. Full address of the subject */
  @Prop() address: string;
  /** Optional. E-mail address of the subject */
  @Prop() email: string;
  /** Optional. Phonenumber of the subject */
  @Prop() phonenumber: string;
  /** Optional: Make the phonenumber a link for dialing out if true */
  @Prop() phonenumberislink: boolean = false;
  /** Optional: Lattitude of the location */
  @Prop() lat: string;
  /** Optional: Longitude of the location */
  @Prop() lon: string;

  @State() showLocation: boolean = false;

  private handleLocationClick = () => {
    this.showLocation = !this.showLocation;
    console.log("test123", this.showLocation);
  };

  render() {
    return (
      <Host>
        <div class="block bg-white rounded-lg shadow-xl p-6 overflow-hidden m-2">
        <div class={this.showLocation ? "hidden" : ""}>
          <div class="md:flex">
            {this.imgsrc ? (
              <img
                class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                src={this.imgsrc}
              />
            ) : null}
            {this.name || this.address || this.email || this.phonenumber ? (
              <div class="text-center md:text-left">
                {this.name ? <h2 class="text-2xl">{this.name}</h2> : null}
                {this.address ? (
                  <div class="text-purple-500">{this.address}</div>
                ) : null}
                {this.email ? (
                  <div class="text-gray-600">{this.email}</div>
                ) : null}
                {this.phonenumber ? (
                  this.phonenumberislink ? (
                    <a href="tel:{this.phonenumber}">
                      <div class="text-gray-600 underline">{this.phonenumber}</div>
                    </a>
                  ) : (
                    <div class="text-gray-600">{this.phonenumber}</div>
                  )
                ) : null}
              </div>
            ) : null}
          </div>
          <div class="block">
            <slot></slot>
          </div>
          <div class="mt-4">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={this.handleLocationClick}
              >
                Show location
              </button>
            </div>
        </div>
          {this.showLocation && this.lat && this.lon && (
            <div class="text-center md:text-left">
              <h2 class="text-2xl">{this.name? `Location of ${this.name}` : 'Location'}</h2>
              <img
                height={200}
                width={400}
                src={`https://atlas.microsoft.com/map/static/png?api-version=1.0&width=400&height=200&subscription-key=YB-HvmHxVoholF2COBlkb92ai4iT_yIdJ20umQFlx0o&center=${this.lon},${this.lat}&pins=default||${this.lon} ${this.lat}`}
              />

              <button
                class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={this.handleLocationClick}
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
