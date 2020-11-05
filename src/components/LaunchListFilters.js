import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sortDesc, sortAsc, filterByYear } from '../actions/filters';

export class LaunchListFilters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'asc'
    };
  }

  onSortChange = (e) => {
    const { sortBy } = this.state;

    e.preventDefault();
    
    if (sortBy === 'desc') {
      this.props.sortDesc();
      this.setState(() => ({ sortBy: 'desc' }));
    } else {
      this.props.sortAsc();
      this.setState(() => ({ sortBy: 'asc' }));
    }
  };

  onFilterChange = (e) => {
    this.props.filterByYear(e.target.value)
  };

  render() {
    return (
      <>
        <select
            // value={this.props.filters.sortBy}
            onChange={this.onFilterChange}
          >
          <option value="year">Filter by Year ▾</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
        </select>
        <button onClick={this.onSortChange}>Sort Descending ⇅</button>
      </>
    );
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  sortDesc: () => dispatch(sortDesc()),
  sortAsc: () => dispatch(sortAsc()),
  filterByYear: year => dispatch(filterByYear(year)),
});

const mapStateToProps = ({ filters }) => ({ filters });

export default connect(mapStateToProps, mapDispatchToProps)(LaunchListFilters);
