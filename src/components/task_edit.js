import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editTask } from '../actions';
import { Field, reduxForm, initalize } from 'redux-form';

export const FORM_BUTTON_GROUP_CLASS = "pure-u-1-2 centered";

class TaskEdit extends Component{
  constructor(props) {
    super(props);

    var task = this.props.task;
    var formattedDate = new Date(task.datedue).toISOString().slice(0,10);
    var priority = task.priority;

    this.state = {task: task, priority: priority, datedue: formattedDate};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  render(){
    const { handleSubmit } = this.props;
    const INPUT_GROUP_CLASS = "pure-control-group";

    return(
      <form className="pure-form pure-form-aligned" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <fieldset>
          <legend>Edit Task</legend>

          <div className={INPUT_GROUP_CLASS}>
            <label>Task Name</label>
            <span>{this.props.task.title}</span>
          </div>

          <div className={INPUT_GROUP_CLASS}>
            <label htmlFor="priority">Priority</label>
            <Field
              name="priority"
              component="select"
              onChange={this.onInputChange}
              >
                <option value="0">Low</option>
                <option value="1">Medium</option>
                <option value="2">High</option>
            </Field>
          </div>

          <div className={INPUT_GROUP_CLASS}>
            <label htmlFor="datedue">Date Due</label>
            <Field
              name="datedue"
              type="date"
              component="input"
              onChange={this.onInputChange }
              required
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

          </div>
        </fieldset>
      </form>
    );
  }

  onSubmit(values){
    event.preventDefault();
    var time = new Date(values.datedue);
    time.setTime(time.getTime() + 21600000 );
    this.props.editTask({...this.state.task, priority: parseInt(values.priority), datedue: time.getTime()});
  }
}

function mapStateToProps({ tasks }, ownProps){
  var task = tasks.find((item) => {return (item.id == ownProps.match.params.id)});
  var formattedDate = new Date(task.datedue).toISOString().slice(0,10);

  return {
    task: task,
    initialValues: {
          task: task,
          priority: task.priority,
          datedue: formattedDate
        }
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editTask }, dispatch);
}

const editForm = reduxForm({
  form: 'EditTaskForm',
  onSubmitSuccess: () => {
      history.back();
  }
})(TaskEdit)

export default connect(mapStateToProps, mapDispatchToProps)(editForm)
