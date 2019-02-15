import * as actions from "../action/button-click-action";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("call finishLoading function when buttonClickAction successfully done", done => {
    const store = mockStore({ buttonAction: [] });
    const payload = { value: true };
    const time = 2000;
    const expectedAction = [
      {
        type: "LOADING_PAGE_STATE",
        value: true,
        showFinal: false
      },
      {
        type: "LOADING_PAGE_STATE",
        value: false,
        showFinal: true
      }
    ];
    store.dispatch(actions.buttonClickAction(payload));
    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    }, time);
  });
});
