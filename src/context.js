import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
