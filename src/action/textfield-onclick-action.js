import { SWAP_CARD_BACK } from "../constant/action-type";
import { SWAP_CARD_FRONT } from "../constant/action-type";

export function swapCard(payload) {
  return function(dispatch) {
    if (payload.id === "dense") {
      console.log("this is calling");
      dispatch({ type: SWAP_CARD_BACK });
    } else {
      console.log("this front is calling");
      dispatch({
        type: SWAP_CARD_FRONT
      });
    }
  };
}
