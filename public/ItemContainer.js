import React, { Component } from 'react'
import FlipMove from 'react-flip-move'

export default class ItemList extends Component {

    constructor(props){
        super(props);


        this.createTasks = this.createTasks.bind(this)
    }

    createTasks = (item) => {

        const a = <li onClick = {() => this.delete(item.key)}
                        key={item.key}>{item.text}</li>
        return a
   }


   delete(key){
       this.props.delete(key);
   }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="list">
                <FlipMove duration={150} easing="ease-out" >
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}
