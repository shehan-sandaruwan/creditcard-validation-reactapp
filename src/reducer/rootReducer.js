import { combineReducers } from "redux";
import ChangeCardSideReducer from "../reducer/index";
import CardValuereducer from "../reducer/cardValue";
import ButtoClickReducer from "../reducer/buttonClick";

const rootReducer = combineReducers({
  creditCardAction: ChangeCardSideReducer,
  buttonAction: ButtoClickReducer,
  creditCard: CardValuereducer
});

export default rootReducer;
