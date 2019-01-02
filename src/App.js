import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact List" />
        <Contact
          name="Dean Winchester"
          email="dean@sn.com"
          phone="9876543210"
        />
        <Contact name="Sam Winchester" email="sam@sn.com" phone="1234567980" />
        <Contact name="Castiel" email="cass@sn.com" phone="9988776655" />
      </div>
    );
  }
}

export default App;
