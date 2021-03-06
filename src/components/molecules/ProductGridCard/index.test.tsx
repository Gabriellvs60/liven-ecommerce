/**
 * @jest-environment jsdom
 */
import React from "react";
import { wrapper } from "../../../helpers/enzymeWrapper";
import ProductGridCard from "./index";

describe("ProductGridCard molecule", () => {
  it("renders correctly", () => {
    const tree = wrapper(
      <ProductGridCard
        data={{
          id: "1",
          title: "Tomato",
          price: 220.0,
          image: "",
          amount: 1,
        }}
        onInsert={() => {}}
      />,
      "shallow"
    );
    expect(tree).toMatchSnapshot();
  });
});
