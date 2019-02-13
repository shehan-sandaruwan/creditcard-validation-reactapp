import { LOADING_PAGE_STATE } from "../constant/action-type";

export function finishLoading() {
  return {
    type: LOADING_PAGE_STATE,
    value: false,
    showFinal: true
  };
}

export function buttonClickAction(payload) {
  return function(dispatch) {
    dispatch({
      type: LOADING_PAGE_STATE,
      value: payload.value,
      showFinal: false
    });
    setTimeout(() => {
      dispatch(finishLoading());
    }, 2000);
  };
}
