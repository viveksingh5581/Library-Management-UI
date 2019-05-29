import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./style";

const Input = ({
  id,
  label,
  type,
  variant,
  placeholder,
  className,
  onChange,
  margin,
  error
}) => {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      margin={margin}
      error={error}
      fullWidth
    />
  );
};

export default withStyles(styles)(Input);
