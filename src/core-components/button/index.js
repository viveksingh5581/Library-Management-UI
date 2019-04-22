import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { styles } from "./styles";

const Buttons = ({ variant, className, isDisabled, value, color }) => {
  return (
    <Button
      variant={variant}
      className={className}
      disabled={isDisabled}
      color={color}
    >
      {value}
    </Button>
  );
};

Buttons.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default withStyles(styles)(Buttons);
