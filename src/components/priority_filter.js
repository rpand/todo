import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFilters } from '../actions';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class PriorityFilter extends Component {
  render() {
    return(
      <div>
        <span className="mobile-only">
          <Dropdown>
            <DropdownTrigger>
              <button className="pure-button filter" id="sort">
                <i className="fa fa-filter" aria-hidden="true"></i> Priority
              </button>
            </DropdownTrigger>
            <DropdownContent>
              <ul className="our-button-children">
                <li>
                  <button onClick={() => {this.props.updateFilters({lowPriority: !this.props.filters.lowPriority})}}
                    className={ this.getCssClasses(this.props.filters.lowPriority) } id="low_filter" >Low</button>
                </li>
                <li>
                  <button onClick={() => {this.props.updateFilters({medPriority: !this.props.filters.medPriority})}}
                    className={ this.getCssClasses(this.props.filters.medPriority) } id="med_filter">Medium</button>
                </li>
                <li>
                  <button onClick={() => {this.props.updateFilters({highPriority: !this.props.filters.highPriority})}}
                    className={ this.getCssClasses(this.props.filters.highPriority) } id="high_filter">High</button>
                </li>
              </ul>
            </DropdownContent>
            </Dropdown>
          </span>

      <span className="desktop-only">
        <div className="pure-u-1-3 pure-u-md-7-24 pure-u-lg-1-3 centered">
          <button onClick={() => {this.props.updateFilters({lowPriority: !this.props.filters.lowPriority})}}
            className={ this.getCssClasses(this.props.filters.lowPriority) } id="low_filter" >Low</button>
        </div>
        <div className="pure-u-1-3 pure-u-md-1-2 pure-u-lg-1-3 centered">
          <button onClick={() => {this.props.updateFilters({medPriority: !this.props.filters.medPriority})}}
            className={ this.getCssClasses(this.props.filters.medPriority) } id="med_filter">Medium</button>
        </div>
        <div className="pure-u-1-3 pure-u-md-1-6 pure-u-lg-1-3 centered">
          <button onClick={() => {this.props.updateFilters({highPriority: !this.props.filters.highPriority})}}
            className={ this.getCssClasses(this.props.filters.highPriority) } id="high_filter">High</button>
        </div>
      </span>

    </div>
    );
  }

  getCssClasses(booleanValue) {
    return booleanValue ? "pure-button filter filter-toggle" : "pure-button filter";
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

export default connect(mapStateToProps, mapDispatchToProps)(PriorityFilter);
