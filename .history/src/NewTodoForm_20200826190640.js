import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor="task">New Task: </label>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default NewTodoForm;
