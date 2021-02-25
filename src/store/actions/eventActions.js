import { FETCH_EVENTS } from "../const/eventConstans";

export function listenToEvents(events) {
  return {
    type: FETCH_EVENTS,
    payload: events,
  };
}
