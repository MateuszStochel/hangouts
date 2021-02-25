import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import eventReducer from "./reducers/eventReducer";
import reducerModal from "./reducers/modalReducer";
import profileReducer from "./reducers/profileReducer";
const rootReducer = combineReducers({
  modal: reducerModal,
  events: eventReducer,
  profile: profileReducer,
  auth: authReducer,
});

export default rootReducer;
