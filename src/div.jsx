import React, { Component } from "react";
import Todo from "./todo";

export default class Div extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleSubmit = e => {
    if (this._Input.value !== "" && this._Input.value !== " ") {
      const newitem = {
        text: this._Input.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return { items: prevState.items.concat(newitem) };
      });
    }

    this._Input.value = "";

    e.preventDefault();
  };

  deleteTodo = key => {
    var filter = this.state.items.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      items: filter
    });
  };

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={a => (this._Input = a)} />
          <button type="submit">Add</button>
        </form>
        <div className="output">
          <Todo
            entries={this.state.items}
            delete={key => this.deleteTodo(key)}
          />
        </div>
      </div>
    );
  }
}
