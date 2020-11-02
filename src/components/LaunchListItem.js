const LaunchListItem = ({ launch }) => {

  return (
    <li>
      <h2>{launch.flight_number}</h2>
      <h3>{launch.mission_name}</h3>
      <p>{launch.launch_date_unix}</p>
      <p>{launch.rocket.rocket_name}</p>
    </li>
  );
};

export default LaunchListItem;
