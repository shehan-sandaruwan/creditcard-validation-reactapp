import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "../Component/app";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("app component", () => {
  test("render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
