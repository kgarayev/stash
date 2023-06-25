import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import { selectToast } from "../store/mainSlice";

const Toast = () => {
  const selectedToast = useSelector(selectToast);
  const progressColor =
    selectedToast && selectedToast.progressColor
      ? selectedToast.progressColor
      : "grey";

  useEffect(() => {
    if (selectedToast) {
      toast(selectedToast.message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
