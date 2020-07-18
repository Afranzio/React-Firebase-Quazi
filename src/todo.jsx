import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask = todo => {
    return (
      <li onClick={() => this.delete(todo.key)} key={todo.key}>
        {todo.text}
      </li>
    );
  };

  delete(key) {
    this.props.delete(key);
  }

  render() {
    let taskList = this.props.entries;

    let list = taskList.map(this.createTask);

    return <div>{list}</div>;
  }
}
