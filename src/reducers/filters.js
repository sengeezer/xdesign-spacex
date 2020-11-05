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
      // console.log('filter:', action.year);
      return { ...state, sortBy: 'date', year: action.year };
    default:
      // console.log('default action type is', action.type);
      return state;
  }
};

export default filterReducer;
