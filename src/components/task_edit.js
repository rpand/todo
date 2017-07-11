import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTask, editTask } from '../actions';

class TaskEdit extends Component{
  constructor(props) {
    super(props);

    var task = this.props.tasks.find((item) => {return (item.id == this.props.match.params.id)});
    var formattedDate = new Date(task.datedue).toISOString().slice(0,10); //yyyy-mm-dd
    var priority = task.priority;

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { priority: priority, datedue: formattedDate, task: task};
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    fetchTask(id);
  }

  render(){
    const task = this.state.task;

    return(
      <form className="pure-form pure-form-aligned">
        <fieldset>
          <legend>Edit Task</legend>

          <div className="pure-control-group">
            <label>Task Name</label>
            <span>{task.title}</span>
          </div>

          <div className="pure-control-group">
            <label htmlFor="priority">Priority</label>
            <select name="priority" defaultValue={this.state.priority} onChange={ event => this.onPriorityChange(event.target.value) }>
              <option value="2">High</option>
              <option value="1">Medium</option>
              <option value="0">Low</option>
            </select>

          </div>

          <div className="pure-control-group">
            <label htmlFor="datedue">Date Due</label>
            <input
              name="priority"
              type="date"
              defaultValue={this.state.datedue}
              onChange={event => this.onDateChange(event.target.value) }
            />
          </div>

          <div className="pure-controls">
            <Link
              to="/"
              className="pure-button pure-button-primary right-buffer"
              type="submit"
              onClick={ this.handleSubmit }>Submit</Link>
             <Link className="pure-button cancel-edit" to="/">Cancel</Link>
          </div>

        </fieldset>
      </form>
    );
  }
  onPriorityChange(priority) {
    this.setState({priority});
  }

  onDateChange(datedue) {
    this.setState({datedue});
  }

  handleSubmit(event){
    var time = new Date(this.state.datedue);
    time.setTime(time.getTime() + 21600000 );
    this.props.editTask({...this.state.task, priority: parseInt(this.state.priority), datedue: time.getTime()});
  }
}

function mapStateToProps(state){
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit);
