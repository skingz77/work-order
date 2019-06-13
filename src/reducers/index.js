import { combineReducers } from "redux";
import WorkOrderFetch from "./WorkOrderFetch";
import WorkerFetch from "./WorkerFetch";
import filterWork from "./filterWork";
const checked = (state = false, action) => {
  switch (action.type) {
    case "CHECKED":
      return action.payload;
    default:
      return state;
  }
};
export default combineReducers({
  WorkOrderFetch,
  WorkerFetch,
  filterWork,
  checked
});
