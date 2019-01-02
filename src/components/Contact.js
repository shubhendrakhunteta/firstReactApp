import React, { Component } from "react";
import propTypes from "prop-types";

class Contact extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
          <li>Email: {this.props.email}</li>
          <li>Phone: {this.props.phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  phone: propTypes.string.isRequired
};

export default Contact;
