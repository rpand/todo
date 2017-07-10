import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

class TaskEdit extends Component{
  onSubmit(values){
    console.log(values);
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
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
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

       <button className="pure-button right-buffer" type="submit">Submit</button>
        <Link className="pure-button cancel-edit" to="/">Cancel</Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'TaskEditForm'
})(TaskEdit);
