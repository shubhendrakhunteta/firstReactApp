import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact List" />
        <div className="container">
          {/*           <Contact
            name="Dean Winchester"
            email="dean@sn.com"
            phone="9876543210"
          />
          <Contact
            name="Sam Winchester"
            email="sam@sn.com"
            phone="1234567980"
          />
          <Contact name="Castiel" email="cass@sn.com" phone="9988776655" /> */}
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
