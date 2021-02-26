import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./firestore/firestoreService";
import useFirestoreDoc from "./firestore/useFirestoreDoc";
import { listenToSelectedUserProfile } from "./store/actions/profileActions";

const ProfilePage = ({ match }) => {
  const dispatch = useDispatch();
  const { selectedUserProfile } = useSelector((state) => state.profile);
  const { currentUser } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.async);

  useFirestoreDoc({
    query: () => getUserProfile(match.params.id),
    data: (profile) => dispatchEvent(listenToSelectedUserProfile(profile)),
    deps: [dispatch, match.params.id],
  });
  return <div></div>;
};

export default ProfilePage;
