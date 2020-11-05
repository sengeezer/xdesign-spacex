export const sortDesc = () => ({
  type: 'SORT_DESC',
});

export const sortAsc = () => ({
  type: 'SORT_ASC',
});

export const filterByYear = year => ({
  type: 'FILTER_BY_YEAR',
  year,
});
