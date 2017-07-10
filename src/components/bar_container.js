import React, { Component } from 'react';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSort } from '../actions';

class BarContainer extends Component {
  constructor(props) {
  super(props);

  this.state = { sortFunction: (function (a,b){
    return a==b;
    })
  }
  this.sortTasks = this.sortTasks.bind(this);
  }

   sortTasks(sortBy){
    	var sortFunction;
    	switch(sortBy){
    		case "alphaAsc":
    			sortFunction = function(a,b){
    				return a.title > b.title;
    			}
    			break;
    		case "alphaDesc":
    			sortFunction = function(a,b){
    				return a.title < b.title;
    			}
    			break;
    		case "priorityAsc":
    			sortFunction = function(a,b){
    				return a.priority > b.priority;
    			}
    			break;
    		case "priorityDesc":
    			sortFunction = function(a,b){
    				return a.priority < b.priority;
    			}
    			break;
    		case "dueDateAsc":
    			sortFunction = function(a,b){
    				return a.datedue > b.datedue;
    			}
    			break;
    		case "dueDateDesc":
    			sortFunction = function(a,b){
    				return a.datedue < b.datedue;
    			}
    			break;
    	}
      this.props.setSort(sortFunction);
    //  return sortFunction();
    }
  render() {
    return(
      <div className="bar_container pure-g">
        <div className="pure-u-1">
          <div className="pure-g">
            <div className="pure-u-1-3 centered">
            <span>
              Show:
              <button id="timeFilterToggle" className="pure-button filter">Today
              </button>
            </span>
            </div>
            <div className="pure-u-1-3 centered">
            <span>
              <div className="pure-u-1-3 centered">
                <button onClick={() => {console.log("cannoli")}} className="pure-button filter" id="low_filter" >Low</button>
              </div>
              <div className="pure-u-1-3 centered">
                <button className="pure-button filter" id="med_filter">Medium</button>
              </div>
              <div className="pure-u-1-3 centered">
                <button className="pure-button filter" id="high_filter">High</button>
              </div>
            </span>
          </div>
          <div className="pure-u-1-3 centered">
          <Dropdown>
            <DropdownTrigger>
              <button className="pure-button sort-button filter" id="sort">
                Sort <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </DropdownTrigger>
            <DropdownContent>
              <ul>
                <li onClick={() => {this.sortTasks("alphaDesc")}}>Alphabetic Descending</li>
                <li onClick={() => {this.sortTasks("alphaAsc")}}>Alphabetic Ascending</li>
                <li onClick={() => {this.sortTasks("priorityDesc")}}>Priority High to Low</li>
                <li onClick={() => {this.sortTasks("priorityAsc")}}>Priority Low to High</li>
                <li onClick={() => {this.sortTasks("dueDateDesc")}}>Date High to Low</li>
                <li onClick={() => {this.sortTasks("dueDateAsc")}}>Date Low to High</li>
              </ul>
            </DropdownContent>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


    function mapStateToProps(state) {
      //connection between redux and component
      return {
        sortFunction:state.sortFunction
      };
    }

    function mapDispatchToProps(dispatch){
      return bindActionCreators({ setSort }, dispatch);
    }

 export default connect(mapStateToProps, mapDispatchToProps)(BarContainer);
