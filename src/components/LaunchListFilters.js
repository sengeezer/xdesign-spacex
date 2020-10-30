const LaunchListFilters = () => {
  return (
    <>
      <select
          // value={this.props.filters.sortBy}
          // onChange={this.onSortChange}
        >
        <option value="year">Filter by Year ▾</option>
        <option value="2020">2020</option>
      </select>
      <button>Sort Descending ⇅</button>
    </>
  );
};

export default LaunchListFilters;
