import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { addTask, incrementID, getNextID } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TaskNew extends Component{
  constructor(props) {
    super(props);
    this.state = {value: '',
                  title: '',
                  priority: '0',
                  datedue: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
}

  onInputChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    //var nextID = this.props.nextID;
    //Get the next ID in a terrible way because mike gives up
    var allTodos = this.props.todos;
    var nextID = allTodos.reduce( (largest, todo) => {return largest > todo.id ? largest:todo.id}, 0 );
    nextID++;
    var today = new Date();
    var time= today.getTime();
    var priority = parseInt(this.state.priority);
    var dueDate = new Date(this.state.duedate);
    dueDate.setTime(dueDate.getTime() + 21600000);
    this.props.addTask({"id":nextID,"datecreated":time,"datedue":this.state.datedue,"title":this.state.title,"priority":priority,"done":false});
    this.setState({ title: '' , priority: '', datedue: ''});
    //this.props.incrementID();
  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <div>
      <Link className= "pure-button home-new" to="/"><i className="fa fa-home" aria-hidden="true"></i>Home</Link>
      <form onSubmit={this.handleSubmit} className="pure-form pure-form-aligned">
        <fieldset>
          <legend>
            <h3>Create A New Task</h3>
          </legend>
          <div className="pure-control-group">
            <label htmlFor="title">Task Name</label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.onInputChange}
              required
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="priority">Priority</label>
            <select
              name="priority"
              value={this.state.priority}
              onChange={this.onInputChange}
              required
            >
              <option value="0">Low</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
            </select>
          </div>

          <div className="pure-control-group">
            <label htmlFor="datedue">Date Due</label>
            <input
              name="datedue"
              type="date"
              value={this.state.datedue}
              onChange={this.onInputChange}
              required
            />
          </div>

          <div className="pure-controls">
            <button className="pure-button pure-button-primary right-buffer" type="submit">Submit</button>
            <Link className= "pure-button cancel-new" to="/">Cancel</Link>
            <div className="divider"/>
          </div>
        </fieldset>
      </form>
    </div>
    );
  }
}

function mapStateToProps(state) {
  //connection between redux and component
  return {
    todos: state.tasks,
    nextID: state.nextID
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addTask, getNextID, incrementID }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskNew);
