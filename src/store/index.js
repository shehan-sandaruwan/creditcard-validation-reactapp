import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import thunk from "redux-thunk";

const allStoreEnhancers = compose(
  applyMiddleware(thunk)
  // , window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  rootReducer,
  {
    creditCard: {
      cardNumber2: 0,
      newArray: [],
      userName: "YOUR NAME HERE",
      expireDate: "",
      securityCode: 0,
      submitButton: false
    },
    creditCardAction: {
      frontSide: true,
      backSide: false,
      buttonState: false,

      buttonAction: {
        cardNumber2: 0,
        userName: "YOUR NAME HERE",
        expireDate: "",
        securityCode: 0,
        loadinPageApper: false,
        showFinalPage: false
      }
    }
  },
  allStoreEnhancers
);
export default store;
