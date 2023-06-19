// importing react, components and libraries
import React from "react";

// importing mui stuff
import TextField from "@mui/material/TextField";

const Input = (props) => {
  return (
    <>
      <TextField
        InputProps={{ sx: { borderRadius: "5rem" } }}
        required
        autoFocus
        fullWidth
        label={props.label}
        margin="dense"
        type={props.type}
        size="small"
      />
    </>
  );
};

export default Input;
