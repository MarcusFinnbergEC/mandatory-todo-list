import React, {Component} from 'react';

class ClearAllDoneTasks extends Component {
    render(){
        return <button onClick={this.props.removeDone}>Remove all completed tasks</button>
    }
}
export default ClearAllDoneTasks;