import lunh from "luhn";
import cardDetails from "../Component/cardDetails";
import moment from "moment";

export const creditCardValidator = creditCard => {
  var luhn = lunh;
  if (creditCard.name === "cardNumber") {
    var is_valid = luhn.validate(creditCard.value.toString());
    console.log("validator is calling", is_valid);
    return is_valid;
  }
  if (creditCard.name === "expireDate") {
    var selectedDate = moment(creditCard.value, "MM/YYYY");
    console.log("select", selectedDate);
    var now = new Date();
    var currMonth = new Date(now.getFullYear(), now.getMonth(), 1).valueOf();
    if (!/^\s*(0?[1-9]|1[0-2])\/(\d\d|\d{4})\s*$/.test(creditCard.value)) {
      return false;
    }
    if (selectedDate <= currMonth) {
      return false;
    } else {
      return true;
    }
  }
  if (creditCard.name === "cardSecurityCode") {
    if (
      !creditCard.value.length === 3 ||
      !creditCard.value.length === 4 ||
      creditCard.value.length === 0
    ) {
      return false;
    } else {
      return true;
    }
  }
  if (creditCard.name === "cardName") {
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (regex.test(creditCard.value) && creditCard.value.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
};
