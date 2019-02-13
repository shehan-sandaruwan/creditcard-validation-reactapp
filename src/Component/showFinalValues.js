import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 500,
    margin: "25px auto"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class SimpleCard extends Component {
  classes = this.props.classes;

  credicardDetails = {
    cardNumber: this.props.cardNumber.toString(),
    cardHoldeName: this.props.userName,
    expiryDate: this.props.expireDate,
    CVC: this.props.securityCode.toString()
  };
  str = JSON.stringify(this.credicardDetails, null, 10);

  render() {
    return (
      <Card className={this.classes.card}>
        <CardContent>
          <Typography component="p">Credit card details =</Typography>
          {this.str}
        </CardContent>
      </Card>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
