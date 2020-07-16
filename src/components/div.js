import React, { Component } from 'react'
import Todo from './todo'

export default class Div extends Component {

    constructor(props){
        super(props); {
        this.state = {
            items: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    }

    handleSubmit = (e) => {
        if (this._Input.value !== "" && this._Input.value !== " "){
            const list = this._Input.value
            const newitem = {
                item : list,
                key : Date.now()
            }

            this.setState((prevSate) => {

                return {items : prevSate.items.concat(newitem)};
            });
        }

        this._Input = "";

        e.preventDefault();
      }

    render() {
        return (
            <div>
                <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" ref={(a) => this._Input = a}/>
                    <button type="submit">Add</button>
                </form>
                <div className='output'>
                    <Todo enteries = {this.state.items} / >
                </div>
            </div>
        )
    }
}
