import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './task';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchTasks } from '../actions';
import BarContainer from './bar_container'


class TaskList extends Component{
  constructor(props) {
  super(props);

  this.filter = this.filter.bind(this);
  //this.updateFilter = this.updateFilter.bind(this);
}

  renderTask(task){
      return (
        <Task key={task.id} task={task} />
      );
  }

  render(){
    const todos = this.filter();
    return(
      <div>
        <h3 className="centered">Task List</h3>
        <BarContainer />
        <Link className="pure-button PlusBtn pull-right /new" to="/new">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </Link>
        {todos.map(this.renderTask)}
      </div>
    );
  }

  filter(){
    console.log(this.props.filters);
    var low = this.props.filters.lowPriority;
    var med = this.props.filters.medPriority;;
    var high = this.props.filters.highPriority;;
    var today = false;

    var filterdTodos = this.props.tasks.slice();

    if(!low){
      filterdTodos = filterdTodos.filter(t => t.priority != 0)
    }
    if(!med){
      filterdTodos = filterdTodos.filter(t => t.priority != 1)
    }
    if(!high){
      filterdTodos = filterdTodos.filter(t => t.priority != 2)
    }
    if(today){
      var todayDate = new Date();
      var todoDate = new Date();
      for(var i=0; i<filterdTodos.length; i++){
        todoDate.setTime(filterdTodos[i].datedue)
        if(todayDate.getDate() != todoDate.getDate()
          || todayDate.getMonth() != todoDate.getMonth()
          || todayDate.getFullYear() != todoDate.getFullYear()){
          filterdTodos.splice(i, 1);
        }
      }
    }
    return filterdTodos;
  }
}

    function mapStateToProps(state) {
      //connection between redux and component
      return {
        tasks: state.tasks,
        filters: state.filters
      };
    }

    function mapDispatchToProps(dispatch){
      return bindActionCreators({ fetchTasks }, dispatch);
    }

    export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
