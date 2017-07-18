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

  renderListItem(sortType, displayString) {
    return(
      <li onClick={() => {this.props.updateFilters({sortBy: sortType})}} className={this.checkSort(sortType)}>{displayString}</li>
    );
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
            {this.renderListItem(ALPHA_ASCENDING, "Alphabetical Ascending")}
            {this.renderListItem(ALPHA_DESCENDING, "Alphabetical Descending")}
            {this.renderListItem(PRIORITY_DESCENDING, "Priority High to Low")}
            {this.renderListItem(PRIORITY_ASCENDING, "Priority Low to High")}
            {this.renderListItem(DUE_DATE_DESCENDING, "Most Recent to Oldest")}
            {this.renderListItem(DUE_DATE_ASCENDING, "Oldest to Most Recent")}
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
