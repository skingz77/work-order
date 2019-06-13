const WorkerFetch = (state = null, action) => {
  switch (action.type) {
    case "FETCH_WORKER":
      return action.payload;
    default:
      return state;
  }
};

export default WorkerFetch;
