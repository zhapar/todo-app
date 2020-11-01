import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  create(newTask) {
    this.setState({ todos: [...this.state.todos, newTask] });
  }

  remove(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  }

  update(id, newTask) {}

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={this.remove}
        />
      );
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <NewTodoForm createTask={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
