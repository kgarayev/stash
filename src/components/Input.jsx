// importing react, components and libraries
import React from "react";

// importing mui stuff
import TextField from "@mui/material/TextField";

const Input = (props) => {
  const { label, type, name, autoFocus } = props;

  return (
    <>
      <TextField
        name={name}
        InputProps={{ sx: { borderRadius: "5rem" } }}
        required
        autoFocus={autoFocus}
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
