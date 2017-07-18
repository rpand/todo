import React, { Component } from 'react';
import PriorityFilter from './priority_filter';
import TodayFilter from './today_filter';
import SortDropdown from './sort_dropdown';

export default function BarContainer() {
    return(
      <div className="bar_container pure-g">
        <div className="pure-u-1">
          <div className="pure-g">
            <div className="pure-u-1-3 centered">
              <TodayFilter />
            </div>
            <div className="pure-u-1-3 centered">
              <PriorityFilter />
          </div>
          <div className="pure-u-1-3 centered">
            <SortDropdown />
          </div>
        </div>
      </div>
    </div>
    );
}
