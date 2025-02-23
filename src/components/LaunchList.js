import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LaunchListItem from './LaunchListItem';
import getVisibleLaunches from '../selectors/launches';

export const LaunchList = props => {
  return (
    <ul className="LaunchList-list">
      {
        props.launches.length === 0 ? (
          <li>No launches found</li>
        ) : (
          props.launches.map(launch => {
            return <LaunchListItem launch={launch} key={launch.flight_number} />
          })
        )
      }
    </ul>
  );
};

const mapStateToProps = ({ launches, filters }) => ({
  launches: getVisibleLaunches(launches, filters),
});

LaunchList.propTypes = {
  launch: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(LaunchList);
