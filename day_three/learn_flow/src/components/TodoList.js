// @flow

import React, { PureComponent } from "react";
import TodoItem from "./TodoItem";
import type { TodoItemType } from "./TodoItem";

import TodoForm from "./TodoForm";

type TodoListPropsType = {|
  todos: Array<TodoItemType>,
  onAddTodo: (todo: TodoItemType) => void,
  onRemoveTodo: (id: number) => void,
  onCompleteTodo: (todo: TodoItemType) => void
|};

class TodoList extends PureComponent<TodoListPropsType> {
  onSubmitTodo = (text: string): void => {
    const todo: TodoItemType = {
      id: new Date().getTime(),
      text,
      completed: false
    };

    this.props.onAddTodo(todo);
  };

  onRemoveTodo = (item: TodoItemType): void => {
    this.props.onRemoveTodo(item.id);
  };

  renderList = () => {
    const { todos } = this.props;

    return (
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={() => this.onRemoveTodo(todo)}
            onCompleted={() => this.props.onCompleteTodo(todo)}
          />
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="todo-container">
        <TodoForm onSubmit={this.onSubmitTodo} />
        {this.renderList()}
      </div>
    );
  }
}

export default TodoList;
