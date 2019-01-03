import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Dean Winchester",
        email: "dean@sn.com",
        phone: "9876543210"
      },
      {
        id: 2,
        name: "Sam Winchester",
        email: "sam@sn.com",
        phone: "1234567980"
      },
      {
        id: 3,
        name: "Castiel",
        email: "cass@sn.com",
        phone: "9988776655"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
