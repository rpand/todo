import React, { Component } from 'react';
import PriorityFilter from './priority_filter';
import TodayFilter from './today_filter';
import SortDropdown from './sort_dropdown';

export default function BarContainer() {
  const CSS_CLASSNAME = "pure-u-1-3 centered";
  
    return(
      <div className="bar_container pure-g">
        <div className="pure-u-1">
          <div className="pure-g">
            <div className={CSS_CLASSNAME}>
              <TodayFilter />
            </div>
            <div className={CSS_CLASSNAME}>
              <PriorityFilter />
          </div>
          <div className={CSS_CLASSNAME}>
            <SortDropdown />
          </div>
        </div>
      </div>
    </div>
    );
}
