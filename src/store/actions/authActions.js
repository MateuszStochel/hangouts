import { SIGN_IN_USER, SIGN_OUT_USER } from "../const/authContans";
import { APP_LOADED } from "../reducers/asyncReducer";
import firebase from "../../config/firebase";
import {
  dataFromSnapshot,
  getUserProfile,
} from "../../firestore/firestoreService";
import { listenToCurrentUserProfile } from "./profileActions";

export function signInuser(user) {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}

export function verifyAuth() {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInuser(user));
        const profileRef = getUserProfile(user.uid);
        profileRef.onSnapshot((snapshot) => {
          dispatch(listenToCurrentUserProfile(dataFromSnapshot(snapshot)));
          dispatch({ type: APP_LOADED });
        });
      } else {
        dispatch(signOutUser());
        dispatch({ type: APP_LOADED });
      }
    });
  };
}
