import firebase from "../config/firebase";
import { setuserProfileData } from "../firestore/firestoreService";

export function signIn(data) {
  return firebase.auth().signInWithEmailAndPassword(data.email, data.password);
}

export async function registerInFirebase(data) {
  try {
    console.log("hiiii");
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    await result.user.updateProfile({ displayName: data.name });
    return await setuserProfileData(result.user);
  } catch (error) {
    throw error;
  }
}
