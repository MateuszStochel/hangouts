import firebase from "../config/firebase";

export function signIn(data) {
  return firebase.auth().signInWithEmailAndPassword(data.email, data.password);
}

export async function registerInFirebase(data) {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
  } catch (error) {
    throw error;
  }
}
