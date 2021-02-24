import { FETCH_EVENTS } from "../const/eventConstans";

export function listenToEvents(events, selectedCategories) {
  // let selectedEvents;
  // if (selectedCategories) {
  //   selectedEvents = selectedCategories.reduce((selectedEventsByCategory, category) => {
  //     return [...selectedEventsByCategory, ...events[category]]
  //   }, [])
  // }

  return {
    type: FETCH_EVENTS,
    payload: events,
  };
}
