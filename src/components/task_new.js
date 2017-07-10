import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

class TaskNew extends Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};
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
        <input
          label="Priority"
          name="priority"
          type="text"
          value={this.state.priority}
          onChange={this.onInputChange}
        />
        <input
          label="Date Due"
          name="datedue"
          type="text"
          value={this.state.datedue}
          onChange={this.onInputChange}
        />

        <button className="pure-button right-buffer" type="submit">Submit</button>
        <Link className= "pure-button cancel-new" to="/">Cancel</Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'TaskNewForm'
})(TaskNew);
