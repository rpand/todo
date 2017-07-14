import React, { Component } from 'react';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFilters } from '../actions';

class BarContainer extends Component {
  constructor(props) {
  super(props);

  this.state = { sortFunction: (function (a,b){
    return a==b;
    })
  }
}


  render() {
    var mobileCheck = false;
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w < 768){mobileCheck = true;} else {mobileCheck = false;}
    return(
      <div className="bar_container pure-g">
        <div className="pure-u-1">
          <div className="pure-g">
            <div className="pure-u-1-3 centered">
            <span>
              Showing:
              <button id="timeFilterToggle"
              onClick={() => {this.props.updateFilters({todayOnly: !this.props.filters.todayOnly})}}
                className={ this.props.filters.todayOnly ? "pure-button filter filter-toggle" : "pure-button filter"}>
                { this.props.filters.todayOnly ? "Today" : "All"}
              </button>
            </span>
            </div>
            <div className="pure-u-1-3 centered">
            <span>
              <div className="pure-u-1-3 centered">
                <button onClick={() => {this.props.updateFilters({lowPriority: !this.props.filters.lowPriority})}}
                  className={ this.props.filters.lowPriority ? "pure-button filter filter-toggle" : "pure-button filter"} id="low_filter" >Low</button>
              </div>
              <div className="pure-u-1-3 centered">
                <button onClick={() => {this.props.updateFilters({medPriority: !this.props.filters.medPriority})}}
                  className={ this.props.filters.medPriority ? "pure-button filter filter-toggle" : "pure-button filter"} id="med_filter">Medium</button>
              </div>
              <div className="pure-u-1-3 centered">
                <button onClick={() => {this.props.updateFilters({highPriority: !this.props.filters.highPriority})}}
                  className={ this.props.filters.highPriority ? "pure-button filter filter-toggle" : "pure-button filter"} id="high_filter">High</button>
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
                <li onClick={() => {this.props.updateFilters({sortBy: "alphaDesc"})}}>Alphabetic Descending</li>
                <li onClick={() => {this.props.updateFilters({sortBy: "alphaAsc"})}}>Alphabetic Ascending</li>
                <li onClick={() => {this.props.updateFilters({sortBy: "priorityDesc"})}}>Priority High to Low</li>
                <li onClick={() => {this.props.updateFilters({sortBy: "priorityAsc"})}}>Priority Low to High</li>
                <li onClick={() => {this.props.updateFilters({sortBy: "dueDateDesc"})}}>Date High to Low</li>
                <li onClick={() => {this.props.updateFilters({sortBy: "dueDateAsc"})}}>Date Low to High</li>
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
        filters: state.filters
      };
    }

    function mapDispatchToProps(dispatch){
      return bindActionCreators({ updateFilters }, dispatch);
    }

 export default connect(mapStateToProps, mapDispatchToProps)(BarContainer);
