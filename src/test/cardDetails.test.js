import React from "react";
import { shallow } from "enzyme";
import CardDetails from "../Component/cardDetails";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("CardDetails", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CardDetails debug />);

    expect(component).toMatchSnapshot();
  });
});
