import {
  UPDATE_CARD_NUMBER,
  UPDATE_CARD_NAME,
  UPDATE_CARD_DATE,
  UPDATE_CARD_SECURITY_CODE,
  CHANGE_STATE
} from "../constant/action-type";

export function updateCardValues(payload) {
  return function(dispatch) {
    if (payload.name === "cardNumber") {
      console.log("dispatch", payload);
      dispatch({
        type: UPDATE_CARD_NUMBER,
        value: payload.value
      });
    }
    if (payload.name === "cardName") {
      dispatch({
        type: UPDATE_CARD_NAME,
        value: payload.value
      });
    }
    if (payload.name === "cardSecurityCode") {
      dispatch({
        type: UPDATE_CARD_SECURITY_CODE,
        value: payload.value,
        button_State: payload.state
      });
    }
    if (payload.name === "expireDate") {
      dispatch({
        type: UPDATE_CARD_DATE,
        value: payload.value
      });
    }
  };
}
