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
  // const [predicate, setPredicate] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(null);

  const events = useSelector(({ events }) =>
    EventsModel.filterEventsByCategories(events, null)
  );

  const transformEventsToArray = useMemo(() => {
    return Object.values(events).flat();
  }, [events]);

  const setSelected = (checkedCategory) => {
    let categories;
    const isSelected = selectedCategories?.some(
      (selectedCategory) => selectedCategory === checkedCategory
    );

    if (selectedCategories) {
      isSelected &&
        (categories = selectedCategories.filter(
          (category) => category !== checkedCategory
        ));
      !isSelected && (categories = [...selectedCategories, checkedCategory]);

      setSelectedCategories(categories.length ? categories : null);
    }

    !selectedCategories && setSelectedCategories([checkedCategory]);
  };

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: (events) => dispatch(listenToEvents(events, selectedCategories)),
    deps: [dispatch, selectedCategories],
  });

  console.log(selectedCategories);

  return (
    <Wrapper>
      <EventFilters events={transformEventsToArray} />
      <EventList onClickCheckbox={setSelected} />
    </Wrapper>
  );
};

export default HomePage;
