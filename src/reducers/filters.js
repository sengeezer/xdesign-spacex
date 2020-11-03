// import dayjs from 'dayjs';

const reducerDefaults = {
  filters: {
    sortBy: 'asc',
    year: '',
  },
};

const filterReducer = (state = reducerDefaults.filters, action) => {
  switch(action.type) {
    case 'SORT_DESC':
      return { ...state, sortBy: 'desc' };
    case 'SORT_ASC':
      return { ...state, sortBy: 'asc' };
    case 'FILTER_BY_YEAR':
      return { ...state, sortBy: 'date', year: action.year };
    default:
      return state;
  }
};

export default filterReducer;
