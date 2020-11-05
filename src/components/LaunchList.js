import { connect } from 'react-redux';

import LaunchListItem from './LaunchListItem';
import getVisibleLaunches from '../selectors/launches';

export const LaunchList = props => {
  const launchListItems = props.launches.map(launch => {
    return <LaunchListItem launch={launch} key={launch.flight_number} />
  });

  return (
    <ul className="LaunchList-list">
      {
        props.launches.length === 0 ? (
          <li>No launches found</li>
        ) : (
          {launchListItems}
        )
      }
    </ul>
  );
};

const mapStateToProps = ({ launches, filters }) => ({
  launches: getVisibleLaunches(launches, filters),
});

export default connect(mapStateToProps)(LaunchList);
