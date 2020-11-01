import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default NewTodoForm;
