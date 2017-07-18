import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFilters } from '../actions';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class TodayFilter extends Component {
  render() {
    return(
      <div>
        <span className="mobile-only">
          <Dropdown>
            <DropdownTrigger>
              <button className="pure-button sort-button filter" id="sort">
                <i className="fa fa-filter" aria-hidden="true"></i> Day
              </button>
            </DropdownTrigger>
            <DropdownContent>
              <ul className="our-button-children">
                <li>
                  <button id="timeFilterToggle"
                  onClick={() => {this.props.updateFilters({todayOnly: !this.props.filters.todayOnly})}}
                    className={ this.props.filters.todayOnly ? "pure-button filter filter-toggle" : "pure-button filter"}>
                    Today
                  </button>
                </li>
                <li>
                  <button id="timeFilterToggle"
                  onClick={() => {this.props.updateFilters({todayOnly: !this.props.filters.todayOnly})}}
                    className={ !this.props.filters.todayOnly ? "pure-button filter filter-toggle" : "pure-button filter"}>
                    All
                  </button>
                </li>
              </ul>
            </DropdownContent>
            </Dropdown>
          </span>

        <span className="desktop-only">
          Showing:
          <button id="timeFilterToggle"
          onClick={() => {this.props.updateFilters({todayOnly: !this.props.filters.todayOnly})}}
            className={ this.props.filters.todayOnly ? "pure-button filter filter-toggle" : "pure-button filter"}>
            { this.props.filters.todayOnly ? "Today" : "All"}
          </button>
        </span>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateFilters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayFilter);
