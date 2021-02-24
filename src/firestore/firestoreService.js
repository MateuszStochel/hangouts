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

export function listenToEventsFromFirestore() {
  let eventsRef = db.collection("events");
  return eventsRef;
  // switch (predicate.get("filter")) {
  //   case "Music":
  //     return eventsRef.where("category", "==", "music");
  //   case "Travel":
  //     return eventsRef.where("category", "==", "travel");
  //   case "Drinks":
  //     return eventsRef.where("category", "==", "drinks");
  //   case "Culture":
  //     return eventsRef.where("category", "==", "culture");
  //   case "Film":
  //     return eventsRef.where("category", "==", "film");
  //   case "Food":
  //     return eventsRef.where("category", "==", "food");

  //   default:
  //     return eventsRef.where("category", "All");
  // }
}
