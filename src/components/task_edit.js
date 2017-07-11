import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskEdit extends Component{
  handleSubmit(values){
    console.log(values);
  }

  render(){
    return(
      <form onSubmit={ this.handleSubmit(this)} className="pure-form pure-form-aligned">
        <fieldset>
          <legend>Edit Task</legend>

          <div className="pure-control-group">
            <div>TASK TITLE</div>
          </div>

          <div className="pure-control-group">
            <label htmlFor="priority">Priority</label>
            <select name="priority">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

          </div>

          <div className="pure-control-group">
            <label htmlFor="datedue">Date Due</label>
            <input
              name="priority"
              type="date"
            />
          </div>

          <div className="pure-controls">
            <button className="pure-button pure-button-primary right-buffer" type="submit">Submit</button>
             <Link className="pure-button cancel-edit" to="/">Cancel</Link>
          </div>

        </fieldset>
      </form>
    );
  }
}

export default TaskEdit;
