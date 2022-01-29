/**
 * @jest-environment jsdom
 */
import React from "react";
import { wrapper } from "../../../helpers/enzymeWrapper";

import Card from "./index";

describe("Card atom", () => {
  it("renders correctly", () => {
    const tree = wrapper(<Card>Contentss</Card>, "shallow");
    expect(tree).toMatchSnapshot();
  });
});
