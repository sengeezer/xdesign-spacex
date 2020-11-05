import spacex from '../api/spacex';

export const setLaunches = launches => ({
  type: 'SET_LAUNCHES',
  launches,
});

export const startSetLaunches = () => (
  async (dispatch) => {
    const { data } = await spacex.get('/launches', {});

    return dispatch(setLaunches(data));
  }
);
