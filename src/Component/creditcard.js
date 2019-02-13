import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 350,
    margin: "20px auto ",
    backgroundColor: "#eceff1"
  },
  media: {
    height: 50
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const Style_chip = {
  maxWidth: 50,
  marginLeft: 5,
  position: "relative",
  right: 100
};

const Style_visa = {
  maxWidth: 50,
  marginLeft: 5,
  position: "relative",
  left: 100
};

class SimpleCard extends Component {
  state = {
    cardNumber2: 0
  };

  createStr(num) {
    let str = num.toString();
    let len = str.length;
    for (len; len < 16; len++) {
      str += "0";
    }
    var result = "";
    for (var i = 0; i < 16; i++) {
      result += str.charAt(i);
      result += " ";
      if ((i + 1) % 4 === 0 && i !== 15) {
        result += "- ";
      }
    }
    console.log("result", result);
    return result;
  }

  updatevalidTill(date) {
    const LEN = 5;
    let str = date.toString();
    let len = str.length;
    for (len; len < LEN; len++) {
      str += "0";
    }
    var result = "";
    for (let i = 0; i < LEN; i++) {
      result += str.charAt(i);
      result += " ";
      if (i === 1 && str.charAt(i - 1) === 0) {
        result += "/";
      }
    }
    return result;
  }

  render() {
    const { classes } = this.props;

    console.log(this.props.cardNumber2);

    return (
      <Card className={classes.card}>
        <CardContent>
          <img
            style={Style_chip}
            src="http://jamesdelaney.ie/dev/chip.png"
            alt="chip"
          />
          <img
            style={Style_visa}
            src="https://webiconspng.com/wp-content/uploads/2017/09/Visa-PNG-Image-76712.png"
            alt="visa"
          />
          <Typography variant="subheading" component="h6">
            <div>{this.createStr(this.props.cardNumber2)}</div>
          </Typography>
          <Typography variant="Title" component="h6" align="right">
            valid thru
          </Typography>
          <Typography variant="Title" component="h6" align="right">
            {this.updatevalidTill(this.props.expireDate)}
          </Typography>
          <Typography variant="subheading" component="h6" align="left">
            {this.props.userName.toUpperCase()}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
