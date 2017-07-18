import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toggleComplete, deleteTask } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import ReactDOM from 'react-dom';

//A single Task within the Task List
class Task extends Component {
  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);

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

  printPriorityMobile(priority) {
    if(priority == 0) {
     return "L";
    }
    else if (priority == 1) {
     return "M";
    }
    else if (priority == 2) {
     return "H";
    }
    return "";
  }


  renderButton(){
    var editUrl = "/edit"+this.props.task.id;
      return(
        <div>

        <div className="righted mobile-only single-task">
          <Dropdown>
            <DropdownTrigger>
              <button className="pure-button">
                <i className="fa fa-cog SpinIcon" aria-hidden="true"></i>
              </button>
            </DropdownTrigger>
            <DropdownContent className="shift-right">
              <ul className="our-button-children">
                <li>
                  <Link className="pure-button taskEdit" to={editUrl}>
                    Edit <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </Link>
                </li>
                <li><button onClick={() => {this.props.deleteTask(this.props.task.id)}} className="pure-button taskDelete">
                  Delete <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button></li>
              </ul>
            </DropdownContent>
          </Dropdown>
        </div>

        <div className="centered desktop-only">
          <Link className="pure-button taskEdit buttonSizer" to={editUrl}>
            Edit <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </Link>
          <br/>
          <button onClick={() => {this.props.deleteTask(this.props.task.id)}} className="pure-button taskDelete buttonSizer">
            Delete <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </div>

      </div>
      );

}

  render() {
    var dateDue = new Date(this.props.task.datedue);
    dateDue = dateDue.toLocaleDateString();
    return (
      <div className="centered-box" id="box">
        <div className="taskDiv">
          {this.renderButton()}
        </div>

        <div className="pure-g">

          <div className="pure-u-1-4 pure-u-md-1-6 box centered">
            <input
              className="todo checkbox centered"
              type="checkbox"
              id={this.props.task.id}
              defaultChecked={this.props.task.done}
              onChange={() => { this.props.toggleComplete(this.props.task.id) }}
            />
          </div>

          <div className="pure-u-7-12 pure-u-md-1-2">
              <div id="title">
                {this.props.task.title}
              </div>
              <div id="dateDue">
                {dateDue}
               </div>
          </div>

          <div className="pure-u-1-6 pure-u-md-1-3">
            <div id="priority" className="desktop-only">
              {this.printPriority(this.props.task.priority)}
            </div>

            <div id="priority" className="mobile-only">
              {this.printPriorityMobile(this.props.task.priority)}
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
