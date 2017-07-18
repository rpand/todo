import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFilters } from '../actions';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import { ALPHA_ASCENDING, ALPHA_DESCENDING, PRIORITY_ASCENDING, PRIORITY_DESCENDING, DUE_DATE_ASCENDING, DUE_DATE_DESCENDING} from './task_list';

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
            <li onClick={() => {this.props.updateFilters({sortBy: ALPHA_ASCENDING})}} className={this.checkSort(ALPHA_ASCENDING)}>Alphabetic Ascending</li>
            <li onClick={() => {this.props.updateFilters({sortBy: ALPHA_DESCENDING})}} className={this.checkSort(ALPHA_DESCENDING)}>Alphabetic Descending</li>
            <li onClick={() => {this.props.updateFilters({sortBy: PRIORITY_DESCENDING})}} className={this.checkSort(PRIORITY_DESCENDING)}>Priority High to Low</li>
            <li onClick={() => {this.props.updateFilters({sortBy: PRIORITY_ASCENDING})}} className={this.checkSort(PRIORITY_ASCENDING)}>Priority Low to High</li>
            <li onClick={() => {this.props.updateFilters({sortBy: DUE_DATE_DESCENDING})}} className={this.checkSort(DUE_DATE_DESCENDING)}>Most Recent to Oldest</li>
            <li onClick={() => {this.props.updateFilters({sortBy: DUE_DATE_ASCENDING})}} className={this.checkSort(DUE_DATE_ASCENDING)}>Oldest to Most Recent</li>
          </ul>
        </DropdownContent>
      </Dropdown>
    );
  }

  checkSort(str) {
    return (str == this.props.filters.sortBy) ? 'filter-toggle' : '';
  }
}
function mapStateToProps(state) {
  return {
    filters: state.filters
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateFilters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SortDropdown);
