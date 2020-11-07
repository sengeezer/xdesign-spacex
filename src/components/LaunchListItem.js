import dayjs from 'dayjs';
import PropTypes from 'prop-types';

const LaunchListItem = ({ launch }) => {

  return (
    <li>
      <h2>{launch.flight_number}</h2>
      <h3>{launch.mission_name}</h3>
      <p>{dayjs.unix(launch.launch_date_unix).format('DD/MM/YYYY')}</p>
      <p>{launch.rocket.rocket_name}</p>
    </li>
  );
};

LaunchListItem.propTypes = {
  launch: PropTypes.object,
};

export default LaunchListItem;
