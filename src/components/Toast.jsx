import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";
import { selectToast, setToast } from "../store/mainSlice";

const Toast = () => {
  const dispatch = useDispatch();
  const selectedToast = useSelector(selectToast);

  const toastMessage =
    selectedToast && selectedToast.message ? selectedToast.message : "";

  const progressColor =
    selectedToast && selectedToast.progressColor
      ? selectedToast.progressColor
      : "grey";

  useEffect(() => {
    if (toastMessage) {
      toast(toastMessage, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      dispatch(setToast({ ...selectedToast, message: "" }));
    }
  }, [selectedToast]);

  return (
    <ToastContainer
      rtl={false}
      style={{ width: "20rem" }}
      toastStyle={{
        // Customize the toast style
        background: "#f7f7f7",
        color: "black",
        fontFamily: `"Quicksand", sans-serif`,
        fontWeight: "500",
        margin: "0.5rem",
        borderRadius: "1rem",
        fontSize: "1.6rem",
        height: "4rem", // Adjust the height as per your requirement
      }}
      progressStyle={{
        // Customize the progress bar style
        background: progressColor,
      }}
    />
  );
};

export default Toast;
