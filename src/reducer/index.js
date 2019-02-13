import { SWAP_CARD_FRONT, SWAP_CARD_BACK } from "../constant/action-type";

function changeCardShowbleSide(state = {}, action) {
  switch (action.type) {
    case SWAP_CARD_BACK:
      let newState1 = Object.assign({}, state);
      //console.log("newStaet1",newState1);
      newState1.frontSide = false;
      newState1.backSide = true;
      return newState1;
    case SWAP_CARD_FRONT:
      newState1 = Object.assign({}, state);
      newState1.frontSide = true;
      newState1.backSide = false;
      return newState1;
    default:
      return state;
  }
}
export default changeCardShowbleSide;
