const reducerDefaults = {
  launches: [],
};

const launchReducer = (state = reducerDefaults.launches, action) => {
  switch(action.type) {
    case 'SET_LAUNCHES':
      return action.launches;
    default:
      return state;
  }
};

export default launchReducer;
