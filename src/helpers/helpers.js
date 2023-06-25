import { store } from "../store/store";
import { setToast, setScreenMode } from "../store/mainSlice";

export const toastTrigger = (toast) => {
  store.dispatch(setToast(toast));
};
