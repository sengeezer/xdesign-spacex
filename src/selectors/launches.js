// import dayjs from 'dayjs';

const getVisibleLaunches = (launches, {
  sortBy,
  year,
}) => {
  return launches.filter((launch) => {
    const filterByDate = sortBy === 'year';
    const yearMatch = launch.launch_year === year;

    return filterByDate && yearMatch;
  }).sort((a, b) => {
    if (sortBy === 'asc') {
      return a.flight_number < b.flight_number ? 1 : -1;
    }

    if (sortBy === 'desc') {
      return a.flight_number > b.flight_number ? 1 : -1;
    }

    return undefined;
  });
};

export default getVisibleLaunches;