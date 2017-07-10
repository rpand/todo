import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//A single Task within the Task List
class Task extends Component {
  printPriority(priority) {
    if(priority == 0) {
      return "Low";
    }
    else if(priority == 1) {
      return "Medium";
    }
    else if(priority == 2) {
      return "High";
    }
    return "";
  }

  render() {
    var dateDue = new Date(this.props.task.datedue);
    dateDue = dateDue.toLocaleDateString();

    return (
      <div className="centered-box" id="box">
        <Link className="taskEdit" to="/edit">Edit</Link>
        <div className="pure-g">
          <div className="pure-u-1-6 box centered">
          <input
            className="todo checkbox"
            type="checkbox"
            id={this.props.task.id}
            onChange={() => {doSomething()}}
            checked={this.props.task.done}
          />
        </div>
        <div className="pure-u-2-3">
            <div id = "title">
              {this.props.task.title}
            </div>
            <div id = "dateDue">
              {dateDue}
             </div>
        </div>
        <div className="pure-u-1-6">
            <div id = "priority">
              {this.printPriority(this.props.task.priority)}
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Task;
