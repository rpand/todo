import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFilters } from '../actions';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class SortDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { sortFunction: (function (a,b){ return a==b; }) };
  }

  render() {
    return(
      <Dropdown>
        <DropdownTrigger>
          <button className="pure-button sort-button filter" id="sort">
            Sort <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </DropdownTrigger>
        <DropdownContent className="shift-right">
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
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateFilters }, dispatch);
}

export default connect(null, mapDispatchToProps)(SortDropdown);
