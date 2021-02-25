import styled from "styled-components";
import React, { useMemo, useState } from "react";
import EventFilters from "./EventFilters";
import EventList from "./EventList";
import { useDispatch, useSelector } from "react-redux";
import useFirestoreCollection, {
  EventsModel,
} from "./firestore/useFirestoreCollection";
import { listenToEventsFromFirestore } from "./firestore/firestoreService";
import { listenToEvents } from "./store/actions/eventActions";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 200px;
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState(null);

  const events = useSelector(({ events }) =>
    EventsModel.filterEventsByCategories(events, null)
  );

  const transformEventsToArray = useMemo(() => {
    return Object.values(events).flat();
  }, [events]);

  const setSelected = (checkedCategory) => {
    const mySelectedCategories = new Set(selectedCategories);
    mySelectedCategories.has(checkedCategory)
      ? mySelectedCategories.delete(checkedCategory)
      : mySelectedCategories.add(checkedCategory);
    const mySelectedCategoriesArray = Array.from(mySelectedCategories);
    setSelectedCategories(
      mySelectedCategoriesArray.length ? mySelectedCategoriesArray : null
    );
  };

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch, selectedCategories],
  });

  return (
    <Wrapper>
      <EventFilters events={transformEventsToArray} />
      <EventList
        selectedCategories={selectedCategories}
        onClickCheckbox={setSelected}
      />
    </Wrapper>
  );
};

export default HomePage;
