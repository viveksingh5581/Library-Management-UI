import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { styles } from "./style";

const SimpleCard = ({ content }) => {
  return (
    <div>
      <Card>
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  );
};

SimpleCard.propTypes = {};

export default withStyles(styles)(SimpleCard);
