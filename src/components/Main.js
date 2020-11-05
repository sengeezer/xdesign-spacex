// import React, {useState, useEffect} from 'react';
// import spacex from '../api/spacex';
import LaunchList from './LaunchList';
import LaunchListFilters from './LaunchListFilters';

const Main = () => {
  return (
    <main>
      <LaunchListFilters />
      <LaunchList />
    </main>
  );
};

export default Main;
