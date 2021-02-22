import firebase from "../config/firebase";

const db = firebase.firestore();

export function addEventToFirestore(event) {
  return db.collection("events").add({
    ...event,
    hostUid: "hostuid",
    hostedBy: "MateuszS",
  });
}
