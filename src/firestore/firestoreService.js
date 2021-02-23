import firebase from "../config/firebase";

const db = firebase.firestore();
export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function addEventToFirestore(event) {
  return db.collection("events").add({
    ...event,
    hostUid: "hostuid",
    hostedBy: "MateuszS",
  });
}

export function setuserProfileData(user) {
  return db.collection("users").doc(user.uid).set({
    displayName: user.displayName,
    email: user.email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

export function getUserProfile(userId) {
  return db.collection("users").doc(userId);
}
