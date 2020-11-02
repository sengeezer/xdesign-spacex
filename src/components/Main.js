import React, {useState, useEffect} from 'react';
import spacex from '../api/spacex';
import LaunchList from './LaunchList';
import LaunchListFilters from './LaunchListFilters';

const Main = () => {
  const [isLoading, setLoading] = useState(true);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await spacex.get('/launches', {});

      setLaunches(data);
      setLoading(false);
    })();
  }, [launches]);

  return (
    <main>
      <LaunchListFilters />
      <LaunchList launches={launches} />
    </main>
  );
};

export default Main;
