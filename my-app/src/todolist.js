import React, { Component } from 'react';
import TodoItems from "./todoitems";
import ClearAllDoneTasks from "./cleardonetasks";

class ToDoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.clearDoneTasks = this.clearDoneTasks.bind(this);
    }


    addItem(e){
        if (this.inputElement.value.trim() !== "") {
            let newItem = {
                text: this.inputElement.value,
                checked: false,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this.inputElement.value = "";
        }

        e.preventDefault();

        console.log(this.state.items);
    }

    removeItem(index) {
        let newState = this.state.items.filter((item, i) => index !== i);
        this.setState({items: newState});
        console.log(this.state.items);
    }

    handleCheck(i){
        let newState = this.state.items.map((item, index) => i === index ? {...item, checked: !item.checked } : item);
        this.setState({items: newState});
        console.log(this.state.items);
    }
    clearDoneTasks() {
        let doneTasks = this.state.items.filter((item) => {
            if (!item.checked){
                return item;
            }
        });
            this.setState({
                items: doneTasks
        });
    }

    render() {
        return (
          <div className="todoListMain">
              <div className="header">
                  <form onSubmit={this.addItem}>
                      <input ref={(a) => this.inputElement = a}
                             placeholder="Enter task">
                      </input>
                      <button type="submit">add</button>
                  </form>
              </div>
              <div className="taskList">
              <TodoItems change={this.handleCheck}
                  remove={this.removeItem}
                  entries={this.state.items}/>
              </div>
              <ClearAllDoneTasks removeDone={(item) => this.clearDoneTasks(item)}/>
          </div>
        );
    };
}

export default ToDoList;