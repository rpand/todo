import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toggleComplete, deleteTask } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

//A single Task within the Task List
class Task extends Component {
  constructor(props) {
  super(props);

  this.state = { taskId: this.props.task.id };
}

  printPriority(priority, mobileCheck) {
    if(priority == 0 && mobileCheck == false) {
      return "Low";
    }
    else if (priority == 0 && mobileCheck == true) {
     return "L";
    }
    else if(priority == 1 && mobileCheck == false) {
      return "Medium";
    }
    else if (priority == 1 && mobileCheck == true) {
     return "M";
    }
    else if(priority == 2 && mobileCheck == false) {
      return "High";
    }
    else if (priority == 2 && mobileCheck == true) {
     return "H";
    }
    return "";
  }

  printDocWidth(edit, del) {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w < 425){
      return ;
    }
    else if(w > 425) {
      return "Edit ","Delete ";
    }
  }

  renderButton(mobileCheck){
    var editUrl = "/edit"+this.props.task.id;

    if (mobileCheck) {
      return(
        <div className="righted">
        <Dropdown>
          <DropdownTrigger>
            <button className="pure-button">
              <i className="fa fa-cog" aria-hidden="true"></i>
            </button>
          </DropdownTrigger>
          <DropdownContent>
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
      );
    } else {
      return(
        <div className="centered">
          <Link className="pure-button taskEdit buttonSizer" to={editUrl}>
            Edit <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </Link>
          <br/>
          <button onClick={() => {this.props.deleteTask(this.props.task.id)}} className="pure-button taskDelete buttonSizer">
            Delete <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </div>
      );
  }
}

  render() {
    var dateDue = new Date(this.props.task.datedue);
    dateDue = dateDue.toLocaleDateString();
    var mobileCheck = false;
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w < 768){mobileCheck = true;} else {mobileCheck = false;}
    return (
      <div className="centered-box" id="box">
        <div className="taskDiv">
          {this.renderButton(mobileCheck)}
        </div>
        <div className="pure-g">
          <div className="pure-u-1-4 pure-u-md-1-6 box centered">
          <input
            className="todo checkbox centered"
            type="checkbox"
            id={this.props.task.id}
            defaultChecked={this.props.task.done}
            onChange={() => {  this.props.toggleComplete(this.props.task.id)}}
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
            <div id="priority">
              {this.printPriority(this.props.task.priority,mobileCheck)}
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
