import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }

  handleChange() {}

  render() {
    return (
      <form>
        <label htmlFor="task">New Task</label>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default NewTodoForm;
