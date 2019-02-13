import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MAX_LENGTH from "../constant/action-type";

const styles = {
  card: {
    maxWidth: 350,
    height: 200,
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

const style_topline = {
  maxWidth: 350,
  height: 40,
  margin: 0,
  backgroundColor: "black"
};

const style_midline = {
  height: 40,
  marginTop: 5,
  width: 250
};

const Style_visa = {
  maxWidth: 50,
  marginLeft: 5,
  maregin: 500,
  position: "relative",
  left: 120,
  top: 50
  //paddingLeft:
};

class SimpleCard extends Component {
  updateCVC(code) {
    const LEN = 4;
    let str = code.toString();
    let len = str.length;
    console.log("cvclen", len);
    for (len; len < LEN; len++) {
      str += "0";
    }
    var result = "";
    for (let i = 0; i < LEN; i++) {
      result += str.charAt(i);
      result += " ";
    }
    return result;
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={style_topline} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} style={style_midline}>
              <div style={{ position: "relative", left: "100px" }}>
                {this.updateCVC(this.props.securityCode)}
              </div>
            </Paper>
          </Grid>
          <img
            style={Style_visa}
            src="https://webiconspng.com/wp-content/uploads/2017/09/Visa-PNG-Image-76712.png"
            alt="visa"
          />
        </CardContent>
      </Card>
    );
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
