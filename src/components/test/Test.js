import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    id: ""
  };

  componentDidMount() {
    console.log("componentDidMount...");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          id: data.id
        })
      );
  }

  render() {
    const { title, id } = this.state;

    return (
      <div>
        <h1>Test Component</h1>
        <h1>{title}</h1>
        <h2>{id}</h2>
      </div>
    );
  }
}

export default Test;
