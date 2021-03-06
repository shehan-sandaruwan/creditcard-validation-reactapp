import React, { Component } from "react";
import Holder from "./holderCard";
import { connect } from "react-redux";
import FinalPage from "./showFinalValues";
import NavBar from "./navBar";
import Alert from "./alert";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.showFinalPage ? (
          <Alert />
        ) : (
          <Holder
            buttonState={this.props.buttonState}
            frontSide={this.props.frontSide}
            cardNumber={this.props.cardNumber}
            preview={this.props.preview}
            cardNumber2={this.props.cardNumber2}
            userName={this.props.userName}
            expireDate={this.props.expireDate}
            securityCode={this.props.securityCode}
            loadingPageApper={this.props.loadingPageApper}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    buttonState: state.creditCard.submitButton,
    frontSide: state.creditCardAction.frontSide,
    cardNumber: state.creditCard.cardNumber,
    preview: state.creditCardAction.preview,
    newArray: state.creditCard.newArray,
    cardNumber2: state.creditCard.cardNumber2,
    userName: state.creditCard.userName,
    expireDate: state.creditCard.expireDate,
    securityCode: state.creditCard.securityCode,
    loadingPageApper: state.buttonAction.loadinPageApper,
    showFinalPage: state.buttonAction.showFinalPage
  };
};

export default connect(mapStateToProps)(App);
