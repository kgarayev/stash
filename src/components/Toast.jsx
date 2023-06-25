import React, { useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
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
        slide: "slide",
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
        fontWeight: "400",
        borderRadius: "1rem",
        margin: "0.5rem",
        fontSize: "1.4rem",
        height: "4rem", // Adjust the height as per your requirement
        paddingBottom: "1rem",
        boxShadow: "0rem 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3)", // Add box shadow for a more defined shadow effect
      }}
      progressStyle={{
        // Customize the progress bar style
        background: progressColor,
      }}
      transition={Slide}
    />
  );
};

export default Toast;
