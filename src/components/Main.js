import React, {useState, useEffect} from 'react';
import spacex from '../api/spacex';
import LaunchList from './LaunchList';
import LaunchListFilters from './LaunchListFilters';

const Main = () => {
  const [isLoading, setLoading] = useState(true);
  const [sortMode, setSortMode] = useState('asc');
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await spacex.get('/launches', {});

      isLoading ? setLaunches(data) : console.log('not loading');
      
      setLoading(false);
    })();
  }, [launches, isLoading]);

  const resetList = () => {
    setLoading(true);
  };

  const sortLaunches = async (sortType, value = null) => {
    let sortedLaunches;

    switch (sortType) {
      case 'asc':
        await resetList();
        sortedLaunches = await launches.sort((a, b) => a.flight_number < b.flight_number ? 1 : -1);

        setLaunches(sortedLaunches);
        break;
      case 'desc':
        await resetList();
        sortedLaunches = await launches.sort((a, b) => a.flight_number > b.flight_number ? 1 : -1);

        setLaunches(sortedLaunches);
        break;
      case 'year':
        await resetList();
        sortedLaunches = await launches.filter(launch => launch.launch_year === value);

        setLaunches(sortedLaunches);
        break;
      default:
        return;
    }
  };

  return (
    <main>
      <LaunchListFilters sortLaunches={sortLaunches} resetList={resetList} />
      <LaunchList launches={launches} />
    </main>
  );
};

export default Main;
