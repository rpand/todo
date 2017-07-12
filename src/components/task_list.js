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
  this.sortTasks = this.sortTasks.bind(this);
}

renderTask(task){
    return (
      <Task key={task.id} task={task} />
    );
}

renderPlaceholder(){
  return (
    <div className="centered create-one">
        <h1>There are currently no tasks to display.</h1>
        <h1>Would you like to <Link className="create-two" to="/new"> create one</Link>?</h1>
    </div>
  );
}

render(){
  const todos = this.filter();
  return(
    <div>
      <div>
        <Link className="pure-button PlusBtn pull-right /new" to="/new">
          <i className="fa fa-plus" aria-hidden="true"></i>
          </Link>
          <h3 className="title centered">Task List</h3>
      </div>
      <BarContainer />
      {todos.length > 0 ? todos.map(this.renderTask) : this.renderPlaceholder()}
    </div>
  );
}

sortTasks(sortBy){
  var sortedTodos = this.props.tasks.slice();
  switch(sortBy){
    case "alphaAsc":
        sortedTodos.sort(function(a, b) {
          return a.title > b.title;
        });
        break;
    case "alphaDesc":
      sortedTodos.sort(function(a, b) {
        return a.title < b.title;
      });
      break;
    case "priorityAsc":
      sortedTodos.sort(function(a, b) {
        return a.priority > b.priority;
      });
      break;
    case "priorityDesc":
      sortedTodos.sort(function(a, b) {
        return a.priority < b.priority;
      });
      break;
    case "dueDateAsc":
      sortedTodos.sort(function(a, b) {
        return a.datedue > b.datedue;
      });
      break;
    case "dueDateDesc":
      sortedTodos.sort(function(a, b) {
        return a.datedue < b.datedue;
      });
      break;
  }
  return sortedTodos;
}

  filter(){
    var low = this.props.filters.lowPriority;
    var med = this.props.filters.medPriority;
    var high = this.props.filters.highPriority;
    var today = this.props.filters.todayOnly;

    var filterdTodos = this.sortTasks(this.props.filters.sortBy);

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
        todoDate.setTime(filterdTodos[i].datedue);
        if(todayDate.getDate() != todoDate.getDate()
          ){
          filterdTodos.splice(i, 1);
          i--;
        }
      }
    }
    var todosThatAreDone = [];
    for(var i=0; i<filterdTodos.length; i++){
      if(filterdTodos[i].done == true){
        var doneTodo = filterdTodos.splice(i,1);
        todosThatAreDone.push(doneTodo[0]);
        i--;
      }
    }
    var returnArray = filterdTodos.concat(todosThatAreDone);
    return returnArray;
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
