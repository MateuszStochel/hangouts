import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../store/actions/asyncActions";
import { dataFromSnapshot } from "./firestoreService";

export class EventsModel {
  static groupEventsByCategory = (events) =>
    events.reduce(
      (groupedEventsByCategory, currentEvent) => ({
        ...groupedEventsByCategory,
        [currentEvent["category"]]: (
          groupedEventsByCategory[currentEvent["category"]] || []
        ).concat(currentEvent),
      }),
      {}
    );

  static filterEventsByCategories = ({ events }, selectedCategories = null) => {
    let filteredEvents;

    selectedCategories &&
      events &&
      (filteredEvents = selectedCategories.reduce(
        (selectedEventsByCategory, category) => [
          ...selectedEventsByCategory,
          events[category],
        ],
        []
      ));

    !selectedCategories && (filteredEvents = events);

    return filteredEvents;
  };
}

export default function useFirestoreCollection({ query, data, deps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => dataFromSnapshot(doc));

        data(EventsModel.groupEventsByCategory(docs));
        dispatch(asyncActionFinish());
      },
      (error) => dispatch(asyncActionError(error))
    );
    return () => {
      unsubscribe();
    };
  }, deps);
}
