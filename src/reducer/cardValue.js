import {
  UPDATE_CARD_NUMBER,
  UPDATE_CARD_NAME,
  UPDATE_CARD_DATE,
  UPDATE_CARD_SECURITY_CODE
} from "../constant/action-type";

function updateCardValueField(state = {}, action) {
  switch (action.type) {
    case UPDATE_CARD_NUMBER:
      let newState = Object.assign({}, state);
      newState.cardNumber2 = action.value;
      return newState;
    case UPDATE_CARD_NAME:
      newState = Object.assign({}, state);
      newState.userName = action.value;
      return newState;
    case UPDATE_CARD_DATE:
      newState = Object.assign({}, state);
      newState.expireDate = action.value;
      return newState;
    case UPDATE_CARD_SECURITY_CODE:
      newState = Object.assign({}, state);
      newState.securityCode = action.value;
      newState.submitButton = action.button_State;
      return newState;
    default:
      return state;
  }
}

export default updateCardValueField;
