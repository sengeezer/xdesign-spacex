import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sortDesc, sortAsc, filterByYear } from '../actions/filters';

export const LaunchListFilters = props => {
  const onSortChange = (e) => {
    const { filters } = props;
    
    e.preventDefault();
    
    if (filters.sortBy === 'desc') {
      props.sortAsc();
    } else {
      props.sortDesc();
    }
  };

  const onFilterChange = (e) => {
    props.filterByYear(e.target.value)
  };

  return (
    <div className="LaunchListFilters-container">
      <select
        onChange={onFilterChange}
      >
        <option value="year">Filter by Year</option>
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
      <button onClick={onSortChange}>Sort {props.filters.sortBy === 'desc' ? 'Descending' : 'Ascending'} ⇅</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  sortDesc: () => dispatch(sortDesc()),
  sortAsc: () => dispatch(sortAsc()),
  filterByYear: year => dispatch(filterByYear(year)),
});

const mapStateToProps = ({ filters }) => ({ filters });

LaunchListFilters.propTypes = {
  sortDesc: PropTypes.func,
  sortAsc: PropTypes.func,
  filterByYear: PropTypes.func,
  filters: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchListFilters);
