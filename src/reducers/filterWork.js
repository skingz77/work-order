const FilterWork = (state = "", action) => {
    switch (action.type) {
      case "FILTER_WORKERS":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default FilterWork;