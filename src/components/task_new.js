import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { addTask, incrementID, getNextID } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FORM_BUTTON_GROUP_CLASS } from './task_edit'

class TaskNew extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  title: '',
                  priority: '0',
                  datedue: ''};

     this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(values){
    event.preventDefault();
    //var nextID = this.props.nextID;
    //Get the next ID in a terrible way because mike gives up
    var allTodos = this.props.todos;
    var nextID = allTodos.reduce( (largest, todo) => {return largest > todo.id ? largest:todo.id}, 0 );
    nextID++;
    var today = new Date();
    var time= today.getTime();
    var priority = parseInt(this.state.priority);
    var dueDate = new Date(this.state.datedue);
    dueDate.setTime(dueDate.getTime() + 21600000);
    this.props.addTask({...this.state.task, title: values.title, priority: priority,
      datedue: dueDate.getTime(), id: nextID, datecreated: time, done: false});
    this.setState({ title: '' , priority: '0', datedue: ''});

    //redirect to task list page
    this.props.history.push('/');
  }

  render(){
    return(
      <div>
        { !this.state.submit ? this.renderForm() : this.renderAlt() }
      </div>
    );
  }

  renderField(field){
    return (
        <input
          type={field.type}
          value={field.value}
          {...field.input}
          required
        />
    );
  }

  renderForm() {
    const { handleSubmit } = this.props;
    return(
      <form  onSubmit={handleSubmit(this.onSubmit.bind(this))} className="pure-form pure-form-aligned">
      <fieldset>
      <legend>
        <h3>Create A New Task </h3>
      </legend>
      <div className="pure-control-group">
        <label htmlFor="title">Task Name</label>
        <Field
          name="title"
          component={this.renderField}
          type="input"
          value={this.state.title}
          onChange={this.onInputChange}
        />
        </div>

        <div className="pure-control-group">
          <label htmlFor="priority">Priority</label>
          <Field
            name="priority"
            value={this.state.priority}
            onChange={this.onInputChange}
            component="select">
              <option value="0">Low</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
          </Field>
        </div>

        <div className="pure-control-group">
          <label htmlFor="datedue">Date Due</label>
          <Field
            name="datedue"
            type="date"
            value={this.state.datedue}
            component={this.renderField}
            onChange={this.onInputChange}
          />
        </div>

        <div className="pure-controls">

          <div className="pure-g submit-button-group">
            <div className={FORM_BUTTON_GROUP_CLASS}>
              <button
                className="pure-button pure-button-primary right-buffer"
                type="submit">
                Submit
              </button>
            </div>
            <div className={FORM_BUTTON_GROUP_CLASS}>
              <Link className="pure-button cancel-edit" to="/">Cancel</Link>
            </div>
          </div>

          <div className="divider"/>
        </div>
        </fieldset>
      </form>
    );
  }
}

  function mapStateToProps(state) {
    return {
      todos: state.tasks,
      nextID: state.nextID
    };
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({ addTask, getNextID, incrementID }, dispatch);
  }

  export default reduxForm({
  form: 'AddTaskForm'
  })(
  connect(mapStateToProps, mapDispatchToProps ) (TaskNew )
  );
