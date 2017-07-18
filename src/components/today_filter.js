import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFilters } from '../actions';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class TodayFilter extends Component {
  render() {
    const BUTTON_TOGGLE = "pure-button filter filter-toggle";
    const BUTTON_UNSELECTED = "pure-button filter";

    const TODAY_LABEL = "Today";
    const ALL_LABEL = "All";

    const BUTTON_ID = "timeFilterToggle";
    
    return(
      <div>
        <span className="mobile-only">
          <Dropdown>
            <DropdownTrigger>
              <button className={BUTTON_UNSELECTED} id="sort">
                <i className="fa fa-filter" aria-hidden="true"></i> Day
              </button>
            </DropdownTrigger>
            <DropdownContent>
              <ul className="our-button-children">
                <li>
                  <button id={BUTTON_ID}
                  onClick={() => {this.props.updateFilters({todayOnly: !this.props.filters.todayOnly})}}
                    className={ this.props.filters.todayOnly ? BUTTON_TOGGLE : BUTTON_UNSELECTED }>
                    {TODAY_LABEL}
                  </button>
                </li>
                <li>
                  <button id={BUTTON_ID}
                  onClick={() => {this.props.updateFilters({todayOnly: !this.props.filters.todayOnly})}}
                    className={ !this.props.filters.todayOnly ? BUTTON_TOGGLE : BUTTON_UNSELECTED }>
                    {ALL_LABEL}
                  </button>
                </li>
              </ul>
            </DropdownContent>
            </Dropdown>
          </span>

        <span className="desktop-only">
          Showing:
          <button id={BUTTON_ID}
            onClick={() => {this.props.updateFilters({todayOnly: !this.props.filters.todayOnly})}}
            className={ this.props.filters.todayOnly ? BUTTON_TOGGLE : BUTTON_UNSELECTED }>
            { this.props.filters.todayOnly ? TODAY_LABEL : ALL_LABEL }
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
