import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Walk the dog" }, { task: "Drink a tea" }],
    };
  }

  create(newTask) {
    this.setState({ ...this.state.todos, newTask });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <NewTodoForm />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
