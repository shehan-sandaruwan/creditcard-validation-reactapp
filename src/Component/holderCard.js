import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CreditCard from "./creditcard";
import CardDetails from "./cardDetails";
import CreditCardBack from "./creditcard-Back";
import { bindActionCreators } from "redux";
import { buttonClickAction } from "../action/button-click-action";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import MoonLoader from "react-spinners/MoonLoader";
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
const button_style = {
  position: "relative",
  left: "200%"
};
class SimpleCard extends Component {
  classes = this.props.classes;
  transactionHandler = () => {
    console.log("sublit is calling");
    var payload = { value: true };
    this.props.buttonClickAction(payload);
  };

  render() {
    console.log("props", this.props.loadingPageApper);
    return (
      <LoadingOverlay
        active={this.props.loadingPageApper}
        // active={true}
        spinner={<MoonLoader />}
        text="Wait..! while your transaction is processing..."
        styles={{
          wrapper: {
            margin: "10px auto",
            overflow: this.props.loadingPageApper ? "hidden" : "scroll"
          }
        }}
        classNamePrefix="MyLoader_"
      >
        <Card className={this.classes.card}>
          <CardContent>
            {this.props.frontSide ? (
              <CreditCard
                cardNumber={this.props.cardNumber}
                preview={this.props.preview}
                cardNumber2={this.props.cardNumber2}
                userName={this.props.userName}
                expireDate={this.props.expireDate}
              />
            ) : (
              <CreditCardBack securityCode={this.props.securityCode} />
            )}
          </CardContent>
          <CardContent>
            <CardDetails
              cardNumber2={this.props.cardNumber2}
              expireDate={this.props.expireDate}
              securityCode={this.props.securityCode}
              buttonState={this.props.buttonState}
            />
          </CardContent>
          <CardActions style={{ display: "inline-block" }}>
            <Button
              variant="contained"
              color="primary"
              className={this.classes.button}
              disabled={!this.props.buttonState}
              style={button_style}
              onClick={this.transactionHandler}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </LoadingOverlay>
    );
  }
}
const mapActionsToProps = (dispatch, props) => {
  console.log("dispatch calling");
  return bindActionCreators(
    {
      buttonClickAction: buttonClickAction
    },
    dispatch
  );
};
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const Holder = withStyles(styles)(SimpleCard);

export default connect(
  null,
  mapActionsToProps
)(Holder);
