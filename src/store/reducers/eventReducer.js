import { FETCH_EVENTS } from "../const/eventConstans";

const initialState = {
  events: {},
};

export default function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_EVENTS:
      return {
        ...state,
        events: payload,
      };
    default:
      return state;
  }
}
