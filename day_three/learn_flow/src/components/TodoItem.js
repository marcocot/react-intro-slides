// @flow

import React, { Component } from "react";

type TodoItemType = {|
  id: number,
  text: string,
  completed: boolean
|};

type TodoItemPropsType = {|
  todo: TodoItemType,
  onCompleted: (todo: TodoItemType) => void,
  onRemove: () => void
|};

class TodoItem extends Component<TodoItemPropsType> {
  onCompleteTodo = () => {
    const { todo, onCompleted } = this.props;
    return onCompleted(todo);
  };

  render() {
    const { todo, onRemove } = this.props;

    return (
      <div className="todo-item">
        <p>{todo.text}</p>

        <label htmlFor={todo.id}>
          <input
            type="checkbox"
            id={todo.id}
            defaultChecked={todo.completed}
            onClick={this.onCompleteTodo}
          />
          Completed
          <button onClick={onRemove}>Remove</button>
        </label>
      </div>
    );
  }
}

export default TodoItem;
export type { TodoItemType };
