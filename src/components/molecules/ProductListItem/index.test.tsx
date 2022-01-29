/**
 * @jest-environment jsdom
 */
import React from "react";
import { wrapper } from "../../../helpers/enzymeWrapper";
import ProductListItem from "./index";

describe("ProductListItem molecule", () => {
  it("renders correctly", () => {
    const tree = wrapper(
      <ProductListItem
        amount={0}
        id="1"
        name="Tomato"
        image=""
        price={12.0}
        onRemove={() => {}}
        onDecrementProduct={() => {}}
        onIncrementProduct={() => {}}
      />,
      "shallow"
    );
    expect(tree).toMatchSnapshot();
  });
});
