import React from "react";
import PropTypes from "prop-types";
import { styles } from "./style";
import { APP_TITLE } from "./constant";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {APP_TITLE}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
