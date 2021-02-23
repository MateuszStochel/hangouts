import { LISTEN_TO_CURRENT_USER_PROFILE } from "../const/profileConstans";

export function listenToCurrentUserProfile(profile) {
  return {
    type: LISTEN_TO_CURRENT_USER_PROFILE,
    payload: profile,
  };
}
