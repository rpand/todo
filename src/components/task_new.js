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
                  priority: '',
                  datedue: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
}

  onInputChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    var nextID = this.props.nextID;
    console.log(nextID);
    console.log(this.state.title);
    this.props.addTask({"id":nextID,"datecreated":1498061397000,"datedue":this.state.datedue,"title":this.state.title,"priority":2,"done":false});
    this.setState({ title: '' , priority: '', datedue: ''});
    this.props.incrementID();
    console.log(this.props.nextID);
  }

  render(){
    const { handleSubmit } = this.props;
    return(
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
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="priority">Priority</label>
            <select
              name="priority"
              value={this.state.priority}
              onChange={this.onInputChange}
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
            />
          </div>

          <div className="pure-controls">
            <button className="pure-button pure-button-primary right-buffer" type="submit">Submit</button>
            <Link className= "pure-button cancel-new" to="/">Cancel</Link>
          </div>
        </fieldset>
      </form>
    );
  }
}

function mapStateToProps(state) {
  //connection between redux and component
  return {
    nextID: state.nextID
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addTask, getNextID, incrementID }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskNew);
