import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toggleComplete, deleteTask } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//A single Task within the Task List
class Task extends Component {
  constructor(props) {
  super(props);

  this.state = { taskId: this.props.task.id };
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
    var editUrl = "/edit"+this.props.task.id
    return (
      <div className="centered-box" id="box">
        <div className="taskDiv centered">
          <Link className="pure-button taskEdit" to={editUrl}>Edit <i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
          <br></br>
          <button onClick={() => {this.props.deleteTask(this.props.task.id)}} className="pure-button taskDelete">Delete <i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-3 pure-u-md-1-6 box centered">
          <input
            className="todo checkbox"
            type="checkbox"
            id={this.props.task.id}
            defaultChecked={this.props.task.done}
            onChange={() => {  this.props.toggleComplete(this.props.task.id)}}
          />
        </div>
        <div className="pure-u-1-3 pure-u-md-2-3">
            <div id="title">
              {this.props.task.title}
            </div>
            <div id="dateDue">
              {dateDue}
             </div>
        </div>
        <div className="pure-u-1-3 pure-u-md-1-6">
            <div id="priority">
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
  return bindActionCreators({ toggleComplete, deleteTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
