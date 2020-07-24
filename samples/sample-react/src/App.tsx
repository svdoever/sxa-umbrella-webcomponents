import React from 'react';
// @ts-ignore
import wrapCustomElement from '@shoelace-style/react-wrapper';
import './App.css';

const DmpAddresscard = wrapCustomElement('dmp-addresscard');

function App() {
  return (
    <div className="App">
    
      {/* With react bindings */}
      <DmpAddresscard name="Erwin Smit"/>

      {/* 
      Without react bindings (good old html)
      // @ts-ignore */}
       <dmp-slottedaddresscard phonenumberislink="true" lat="32.1479602" lon="-85.0162703">
          <span slot="name">Amy Edwards</span>
          <div slot="address">1212 Omaha Dr, Montgomery, AL 36105, United States</div>
          <div slot="phonenumber">+1 334-280-0960</div>
          <div slot="email">amy.edwards@example.com</div>
          <div slot="block">
            <hr className="mt-4" />
            <strong>"The greatest glory in living lies not in never falling, but in rising every time we fall."</strong>
            <em>-Nelson Mandela</em>
            <hr />
          </div>
        {/* @ts-ignore */}
        </dmp-slottedaddresscard>
    </div>
  );
}

export default App;
