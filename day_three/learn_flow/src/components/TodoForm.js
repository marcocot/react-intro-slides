// @flow

import React, { PureComponent } from "react";

type TodoFormPropsType = {|
  onSubmit: (data: string) => void
|};

type TodoFormStateType = {|
  text: string
|};

class TodoForm extends PureComponent<TodoFormPropsType, TodoFormStateType> {
  state = { text: "" };

  onChange = ({ target: { value } }: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState(state => ({
      ...state,
      text: value
    }));
  };

  onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onSubmit(this.state.text);
    this.setState(state => ({
      ...state,
      text: ""
    }));
  };

  render() {
    const { text } = this.state;
    const { onSubmit } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="newTodo">
          Add a new todo:
          <input
            id="newTodo"
            type="text"
            placeholder="Todo text"
            value={text}
            onChange={this.onChange}
            className="new-todo-input"
          />
        </label>

        <button type="submit">add</button>
      </form>
    );
  }
}

export default TodoForm;
