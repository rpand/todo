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

  render(){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={this.handleSubmit}>
      <div>
        <h3>Task title</h3>
        <Link to="/">Task List</Link>
      </div>
        <input
          label="Title"
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.onInputChange}
        />
        <select
          name="priority"
          value={this.state.priority}
          onChange={this.onInputChange}
        >
        <label>Priority</label>

          <option value='0'>Low</option>
          <option value='1'>Medium</option>
          <option value='2'>High</option>

          </select>
        <input
          label="Date Due"
          name="datedue"
          type="date"
          value={this.state.datedue}
          onChange={this.onInputChange}
        />

        <button className="pure-button right-buffer" type="submit">Submit</button>
        <Link className= "pure-button cancel-new" to="/">Cancel</Link>
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
