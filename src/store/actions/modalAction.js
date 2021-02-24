import { CLOSE_MODAL, OPEN_MODAL } from "../const/modalConst";

export function openModal(payload) {
  return {
    type: OPEN_MODAL,
    payload,
  };
}

export function closeModal(payload) {
  return {
    type: CLOSE_MODAL,
  };
}
