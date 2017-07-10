import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

class TaskNew extends Component{

  onSubmit(values){
    console.log(values);
  }

  onInputChange(event){
    console.log(this)
  }

  renderField(field){
    return(
      <div >
        <label>{field.label}</label>
        <input
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <div>
        <h3>Task title</h3>
        <Link to="/">Task List</Link>
      </div>
        <Field
          label="Title"
          name="title"
          type="text"
          component={this.renderField}
          defaultValue='f'
          onChange={this.onInputChange.bind(this)}
        />
        <Field
          label="Priority"
          name="priority"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Date Due"
          name="datedue"
          type="text"
          component={this.renderField}
        />

        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'TaskNewForm'
})(TaskNew);
