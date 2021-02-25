import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { verifyAuth } from "./actions/authActions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(verifyAuth());

export default store;
