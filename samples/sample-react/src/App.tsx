import React from 'react';
// @ts-ignore
import wrapCustomElement from '@shoelace-style/react-wrapper';
import './App.css';

const DmpAddresscard = wrapCustomElement('dmp-addresscard');

function App() {
  return (
    <div className="App">
      <h1>React samples</h1>
      <h2>With React bindings (e.g. DmpAddresscard)</h2>      
      {/* With react bindings */}
      <div className="flex flex-wrap -mb-4">
        <div className="w-1/2 p-4 mb-4 bg-gray-400">
          <DmpAddresscard 
            imgsrc="react/images/Amy Edwards.jpg" name="Amy Edwards"
            address="1212 Omaha Dr, Montgomery, AL 36105, United States" lat="32.1479602" lon="-85.0162703"
            email="amy.edwards@example.com" phonenumber="+1 334-280-0960" phonenumberislink={true} addressislink={true}>
            <hr className="mt-4" />
            <strong>"The greatest glory in living lies not in never falling, but in rising every time we fall."</strong>
            <em>-Nelson Mandela</em>
            <hr />
          </DmpAddresscard>
        </div>
        <div className="w-1/2 p-4 mb-4 bg-gray-400">
          <DmpAddresscard 
            imgsrc="react/images/Vanessa Adams.jpg" name="Vanessa Adams"
            address="1118 W Fullerton Ave, Chicago, IL 60614, United States" lat="41.9243558" lon="87.657001"
            email="vanessa.adams@example.com" phonenumber="+1 773-472-4873" phonenumberIsLink={true} addressIsLink={true}>
            <hr className="mt-4" />
            <strong>"The way to get started is to quit talking and begin doing."</strong>
            <em>-Walt Disney</em>
            <hr />
          </DmpAddresscard>
        </div>
      </div>

      <h2>Without React bindings (e.g. dmp-slottedaddresscard)</h2>  
      <div className="flex flex-wrap -mb-4">
        <div className="w-1/2 p-4 mb-4 bg-gray-400">
        {/* Without react bindings (good old html) */}
        <dmp-slottedaddresscard phonenumberislink="true" addressislink="true" lat="32.1479602" lon="-85.0162703">
            <div slot="image"><img src="react/images/Amy Edwards.jpg" alt="Amy Edwards"/></div>
            <div slot="name">Amy Edwards</div>
            <div slot="address">1212 Omaha Dr, Montgomery, AL 36105, United States</div>
            <div slot="phonenumber">+1 334-280-0960</div>
            <div slot="email">amy.edwards@example.com</div>
            <div slot="block">
              <hr className="mt-4" />
              <strong>"The greatest glory in living lies not in never falling, but in rising every time we fall."</strong>
              <em>-Nelson Mandela</em>
              <hr />
            </div>
          </dmp-slottedaddresscard>
        </div>
        <div className="w-1/2 p-4 mb-4 bg-gray-400">
          <dmp-slottedaddresscard phonenumberislink="true" addressislink="true" lat="32.923308" lon="-96.892596">
            <div slot="image"><img src="react/images/Ellen May.jpg" alt="Ellen May"/></div>
            <div slot="name">Ellen May</div>
            <div slot="address">2610 Valley View Ln, Farmers Branch, TX 75234, United States</div>
            <div slot="phonenumber">+1 972-919-2620</div>
            <div slot="email">ellen.may@example.com</div>
            <div slot="block">
              <hr className="mt-4" />
              <strong>"The way to get started is to quit talking and begin doing."</strong>
              <em>-Walt Disney</em>
              <hr />
            </div>
          </dmp-slottedaddresscard>
        </div>
      </div>
    </div>
  );
}

export default App;
