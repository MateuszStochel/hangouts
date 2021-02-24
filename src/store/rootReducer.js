import { combineReducers } from "redux";
import eventReducer from "./reducers/eventReducer";
import reducerModal from "./reducers/modalReducer";
const rootReducer = combineReducers({
  modal: reducerModal,
  events: eventReducer,
});

export default rootReducer;
