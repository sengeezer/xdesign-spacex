import LaunchListItem from './LaunchListItem';

const LaunchList = ({ launches }) => {
  const launchListItems = launches.map(launch => {
    return <LaunchListItem launch={launch} key={launch.flight_number} />
  });

  return (
    <ul>
      {launchListItems}
    </ul>
  );
};

export default LaunchList;
