import { combineReducers } from "redux";
import reducerModal from "./reducers/modalReducer";
const rootReducer = combineReducers({
  modal: reducerModal,
});

export default rootReducer;
