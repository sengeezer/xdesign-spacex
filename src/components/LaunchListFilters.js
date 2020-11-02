const LaunchListFilters = () => {
  const onSortChange = (e) => {
    if (e.target.value === 'date') {
      // this.props.sortByDate();
    } else {
      // this.props.sortByAmount();
    }
  };

  return (
    <>
      <select
          // value={this.props.filters.sortBy}
          onChange={onSortChange}
        >
        <option value="year">Filter by Year ▾</option>
        <option value="2020">2020</option>
      </select>
      <button>Sort Descending ⇅</button>
    </>
  );
};

export default LaunchListFilters;
