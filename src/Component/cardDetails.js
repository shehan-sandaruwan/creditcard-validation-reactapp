import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { swapCard } from "../action/textfield-onclick-action";
import { updateCardValues } from "../action/update-cardvalue-action";
import { bindActionCreators } from "redux";
import { creditCardValidator } from "../service/validator";
import InputAdornment from "@material-ui/core/InputAdornment";
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class FilledTextFields extends React.Component {
  state = {
    specialText_cardNumber: "",
    specialText_cardName: "",
    specialText_cardDate: "",
    specialText_cardCVC: "",
    error_state_cardNumber: false,
    error_state_cardName: false,
    error_state_cardDate: false,
    error_state_cardCVC: false,
    cardImage: "https://img.icons8.com/ios/48/000000/bank-card-back-side.png",
    cardNumber: null,
    error: false
  };

  handleChange = event => {
    var name = event.target.name;
    const re = /^[0-9\b]+$/;
    if (
      (event.target.value === "" || re.test(event.target.value)) &&
      name === "cardNumber"
    ) {
      let value = event.target.value;
      console.log("isnan", value);
      var payload = {
        name: name,
        value: value
      };
      this.props.updateCardValues(payload);
    }
    if (name === "cardName") {
      payload = {
        name: name,
        value: event.target.value
      };
      this.props.updateCardValues(payload);
    }
    if (name === "expireDate") {
      payload = {
        name: name,
        value: event.target.value
      };
      this.props.updateCardValues(payload);
    }
    if (name === "cardSecurityCode") {
      payload = {
        name: name,
        value: event.target.value,
        state:
          !this.state.error_state_cardCVC &&
          !this.state.error_state_cardDate &&
          !this.state.error_state_cardName &&
          !this.state.error_state_cardNumber &&
          this.state.cardNumber != null
      };
      console.log("state2", this.state.cardNumber);
      this.props.updateCardValues(payload);
    }
  };

  onClickOnTextField = event => {
    var str = this.props.cardNumber2.toString();
    if (str.length < 16) {
      console.log("onclick");
      this.setState({
        cardImage:
          "https://img.icons8.com/ios/48/000000/bank-card-back-side.png",
        specialText_cardNumber: "",
        specialText_cardName: "",
        specialText_cardDate: "",
        specialText_cardCVC: ""
      });
    }
    var _id = event.target.id;
    this.setState({
      id: _id
    });
    this.props.swapCard({ id: _id });
  };

  callValidator = event => {
    var name = event.target.name;

    var creditCard = {
      value: this.props.cardNumber2,
      name: name
    };

    if (name === "cardNumber") {
      if (
        !creditCardValidator(creditCard) ||
        creditCard.value.toString().length === 0
      ) {
        this.setState({
          specialText_cardNumber: "Invalid number",
          error_state_cardNumber: true,
          error: true,
          cardImage:
            "https://img.icons8.com/ios/48/000000/bank-card-back-side.png",
          cardNumber: this.props.cardNumber2
        });
      } else {
        this.setState({
          specialText_cardNumber: "",
          error_state_cardNumber: false,
          cardNumber: this.props.cardNumber2
        });
        var str = this.props.cardNumber2.toString();
        if (str.charAt(0) === "4") {
          this.setState({
            cardImage: "https://img.icons8.com/color/48/000000/visa.png"
          });
        }
        if (str.charAt(0) === "5") {
          this.setState({
            cardImage: "https://img.icons8.com/color/48/000000/mastercard.png"
          });
        }
      }
    }
    if (name === "cardName") {
      console.log("card name", event.target.value.length);
      creditCard = {
        name: event.target.name,
        value: event.target.value
      };
      if (!creditCardValidator(creditCard)) {
        this.setState({
          specialText_cardName: "Valid name is required",
          error_state_cardName: true,
          error: true
        });
      } else {
        this.setState({
          specialText_cardName: "",
          error_state_cardName: false,
          error: false
        });
      }
    }
    if (name === "expireDate") {
      var expireDate_str = this.props.expireDate;
      console.log("date", expireDate_str);
      creditCard = {
        value: expireDate_str,
        name: name,
        id: event.target.id
      };
      if (!creditCardValidator(creditCard)) {
        this.setState({
          specialText_cardDate: "Invalid date",
          error_state_cardDate: true,
          error: true
        });
      } else {
        this.setState({
          specialText_cardDate: "",
          error_state_cardDate: false,
          error: false
        });
      }
    }
    if (name === "cardSecurityCode") {
      creditCard = {
        value: event.target.value,
        name: name
      };
      if (!creditCardValidator(creditCard)) {
        this.setState({
          specialText_cardCVC: "Invalid CVC",
          error_state_cardCVC: true,
          error: true
        });
      } else {
        this.setState({
          specialText_cardCVC: "",
          error_state_cardCVC: false,
          error: false
        });
      }
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="cardNumber"
          label="Card Number"
          name="cardNumber"
          type="number"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onClick={this.onClickOnTextField}
          onChange={this.handleChange}
          onBlur={this.callValidator}
          helperText={this.state.specialText_cardNumber}
          error={this.state.error_state_cardNumber}
          onInput={e => {
            e.target.value = Math.max(0, e.target.value)
              .toString()
              .slice(0, 16);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img src={this.state.cardImage} alt="Card-Type" />
              </InputAdornment>
            )
          }}
        />
        <TextField
          id="filled-dense"
          label="Name"
          name="cardName"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onClick={this.onClickOnTextField}
          onBlur={this.callValidator}
          helperText={this.state.specialText_cardName}
          error={this.state.error_state_cardName}
          onChange={this.handleChange}
        />

        <table>
          <tr>
            <td>
              <TextField
                id="exp"
                label="Expire Date"
                name="expireDate"
                placeholder="MM/YY"
                type="text"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onClick={this.onClickOnTextField}
                onBlur={this.callValidator}
                helperText={this.state.specialText_cardDate}
                error={this.state.error_state_cardDate}
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </td>
            <td>
              <TextField
                id="dense"
                label="CVC"
                name="cardSecurityCode"
                type="string"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onClick={this.onClickOnTextField}
                onBlur={this.callValidator}
                helperText={this.state.specialText_cardCVC}
                error={this.state.error_state_cardCVC}
                onChange={this.handleChange}
                onInput={e => {
                  e.target.value = Math.max(0, e.target.value)
                    .toString()
                    .slice(0, 4);
                }}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </td>
          </tr>
        </table>
      </form>
    );
  }
}
const mapActionsToProps = (dispatch, props) => {
  console.log("dispatch calling");
  return bindActionCreators(
    {
      swapCard: swapCard,
      updateCardValues: updateCardValues
    },
    dispatch
  );
};

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

const CardDef = withStyles(styles)(FilledTextFields);

export default connect(
  null,
  mapActionsToProps
)(CardDef);
