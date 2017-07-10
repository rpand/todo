import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { markAsComplete } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//A single Task within the Task List
class Task extends Component {
  constructor(props) {
  super(props);

  this.state = { taskId: this.props.task.id };

  this.markComplete = this.markComplete.bind(this);
}

markComplete(){
  this.props.markAsComplete(this.props.task.id);
}

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
            defaultChecked={this.props.task.done}
            onChange={this.markComplete}
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

function mapStateToProps(state) {
  return {
    taskId: state.taskId
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ markAsComplete }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
