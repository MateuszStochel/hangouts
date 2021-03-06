import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { signOutFirebase } from "../../../firestore/firestoreService";

const SignInMenu = () => {
  const { currentUserProfile } = useSelector((state) => state.profile);
  const history = useHistory();

  async function handleSignOut() {
    try {
      await signOutFirebase();
      history.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  }
  const changeURL = (path) => {
    history.push(path);
  };
  return (
    <div>
      <div>{currentUserProfile?.displayName}</div>
      <div onClick={handleSignOut}>SignOut</div>
      <div onClick={() => changeURL("/myprofile")}>MyProfile</div>
    </div>
  );
};

export default SignInMenu;
