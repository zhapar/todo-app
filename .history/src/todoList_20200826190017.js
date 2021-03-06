import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
    });
    return <h1>Todo List!</h1>;
  }
}

export default TodoList;
