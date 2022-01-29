/**
 * @jest-environment jsdom
 */
import React from "react";
import { wrapper } from "../../../helpers/enzymeWrapper";
import IconButton from "./index";
import { HiOutlineShoppingBag } from "react-icons/hi";

describe("IconButton molecule", () => {
  it("renders correctly", () => {
    const tree = wrapper(
      <IconButton badgeCount={2}>
        <HiOutlineShoppingBag fontSize="20px" />
      </IconButton>,
      "shallow"
    );
    expect(tree).toMatchSnapshot();
  });
});
