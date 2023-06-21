// importing react, components and libraries
import React from "react";

// importing mui stuff
import TextField from "@mui/material/TextField";

const Input = (props) => {
  const { label, type, name, autoFocus, onInput, id } = props;

  return (
    <>
      <TextField
        id={id}
        name={name}
        InputProps={{ sx: { borderRadius: "1rem" } }}
        required
        autoFocus={autoFocus}
        fullWidth
        label={label}
        margin="dense"
        type={type}
        size="small"
        onInput={onInput}
      />
    </>
  );
};

export default Input;
