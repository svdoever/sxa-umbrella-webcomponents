/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DmpAddresscard {
        /**
          * Optional. Full address of the subject
         */
        "address": string;
        /**
          * Optional. E-mail address of the subject
         */
        "email": string;
        /**
          * Optional. (Relative) url to the image to show on the card
         */
        "imgsrc": string;
        /**
          * Optional: Lattitude of the location
         */
        "lat": string;
        /**
          * Optional: Longitude of the location
         */
        "lon": string;
        /**
          * Optional. Full name of the subject
         */
        "name": string;
        /**
          * Optional. Phonenumber of the subject
         */
        "phonenumber": string;
        /**
          * Optional: Make the phonenumber a link for dialing out if true
         */
        "phonenumberislink": boolean;
    }
    interface DmpSlottedaddresscard {
        /**
          * Optional: Make the address a link for openin new window in Google maps if true
         */
        "addressIslink": boolean;
        /**
          * Optional: Lattitude of the location
         */
        "lat": string;
        /**
          * Optional: Longitude of the location
         */
        "lon": string;
        /**
          * Optional: Make the phonenumber a link for dialing out if true
         */
        "phonenumberIslink": boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLDmpAddresscardElement extends Components.DmpAddresscard, HTMLStencilElement {
    }
    var HTMLDmpAddresscardElement: {
        prototype: HTMLDmpAddresscardElement;
        new (): HTMLDmpAddresscardElement;
    };
    interface HTMLDmpSlottedaddresscardElement extends Components.DmpSlottedaddresscard, HTMLStencilElement {
    }
    var HTMLDmpSlottedaddresscardElement: {
        prototype: HTMLDmpSlottedaddresscardElement;
        new (): HTMLDmpSlottedaddresscardElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "dmp-addresscard": HTMLDmpAddresscardElement;
        "dmp-slottedaddresscard": HTMLDmpSlottedaddresscardElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface DmpAddresscard {
        /**
          * Optional. Full address of the subject
         */
        "address"?: string;
        /**
          * Optional. E-mail address of the subject
         */
        "email"?: string;
        /**
          * Optional. (Relative) url to the image to show on the card
         */
        "imgsrc"?: string;
        /**
          * Optional: Lattitude of the location
         */
        "lat"?: string;
        /**
          * Optional: Longitude of the location
         */
        "lon"?: string;
        /**
          * Optional. Full name of the subject
         */
        "name"?: string;
        /**
          * Optional. Phonenumber of the subject
         */
        "phonenumber"?: string;
        /**
          * Optional: Make the phonenumber a link for dialing out if true
         */
        "phonenumberislink"?: boolean;
    }
    interface DmpSlottedaddresscard {
        /**
          * Optional: Make the address a link for openin new window in Google maps if true
         */
        "addressIslink"?: boolean;
        /**
          * Optional: Lattitude of the location
         */
        "lat"?: string;
        /**
          * Optional: Longitude of the location
         */
        "lon"?: string;
        /**
          * Optional: Make the phonenumber a link for dialing out if true
         */
        "phonenumberIslink"?: boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "dmp-addresscard": DmpAddresscard;
        "dmp-slottedaddresscard": DmpSlottedaddresscard;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dmp-addresscard": LocalJSX.DmpAddresscard & JSXBase.HTMLAttributes<HTMLDmpAddresscardElement>;
            "dmp-slottedaddresscard": LocalJSX.DmpSlottedaddresscard & JSXBase.HTMLAttributes<HTMLDmpSlottedaddresscardElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
