/**
 * @jest-environment jsdom
 */
import React from "react";
import { wrapper } from "../../../helpers/enzymeWrapper";
import ListTool from "./index";

describe("ListTool molecule", () => {
  it("renders correctly", () => {
    const tree = wrapper(<ListTool hasListView />, "shallow");
    expect(tree).toMatchSnapshot();
  });
});
