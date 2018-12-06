// @flow

import React, { Component } from "react";
import { render } from "react-dom";

import TodoList from "./components/TodoList";
import type { TodoItemType } from "./components/TodoItem";

type AppState = {|
  todos: Array<TodoItemType>
|};

class App extends Component<any, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  addTodo = (todo: TodoItemType): void => {
    this.setState(state => ({
      todos: state.todos.concat(todo)
    }));
  };

  removeTodo = (id: number): void => {
    this.setState(state => ({
      todos: state.todos.filter((item: TodoItemType): boolean => item.id !== id)
    }));
  };

  completeTodo = (todo: TodoItemType): void => {
    const { todos } = this.state;

    this.setState(state => ({
      todos: todos.map(item => {
        if (item.id === todo.id) {
          item.completed = !item.completed;
        }

        return item;
      })
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoList
          todos={todos}
          onAddTodo={this.addTodo}
          onRemoveTodo={this.removeTodo}
          onCompleteTodo={this.completeTodo}
        />

        <span className="status-text">Total: {todos.length}</span>
        <span className="status-text">
          Completed: {todos.filter(todo => todo.completed).length}
        </span>
      </div>
    );
  }
}

const root = document.getElementById("app");
if (root) render(<App />, root);
