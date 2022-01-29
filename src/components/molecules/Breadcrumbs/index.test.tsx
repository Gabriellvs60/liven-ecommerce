/**
 * @jest-environment jsdom
 */
import React from "react";
import { wrapper } from "../../../helpers/enzymeWrapper";
import Breadcrumbs from "./index";

const links = [
  {
    href: "/",
    labelId: "home",
  },
  {
    href: "/",
    labelId: "shop",
  },
  {
    href: "/",
    labelId: "page3",
  },
];

describe("Breadcrumbs molecule", () => {
  it("renders correctly", () => {
    const tree = wrapper(<Breadcrumbs links={links} />, "shallow");
    expect(tree).toMatchSnapshot();
  });
});
