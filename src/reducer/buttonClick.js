import { LOADING_PAGE_STATE } from "../constant/action-type";

function buttonClickEvent(state = {}, action) {
  console.log("action value", state);
  switch (action.type) {
    case LOADING_PAGE_STATE:
      let newState = Object.assign({}, state);
      newState.loadinPageApper = action.value;
      newState.showFinalPage = action.showFinal;
      return newState;
    default:
      return state;
  }
}

export default buttonClickEvent;
