import { store } from "../store/store";
import { setToast, setScreenMode } from "../store/mainSlice";

// for triggering toasts

export const toastTrigger = (toast) => {
  store.dispatch(setToast(toast));
};
