import React, { Component } from "react";

class TodoItems extends Component {

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(((item, index) => (
            <li key={item.key}>
                <div className="listItemInfo"><input type="checkbox" checked={item.checked} onClick={() => this.props.change(index)} />
                    <span className={item.checked ? 'done' : 'notDone'}>{item.text}</span></div>
                <div className="listItemButton"><button onClick={() => this.props.remove(index)}>Remove task</button></div>
            </li>
        )));

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;