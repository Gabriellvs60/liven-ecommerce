/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { wrapper } from "../../../helpers/enzymeWrapper";
 
 import Divider from "./index";
 
 describe("Divider atom", () => {
   it("renders correctly", () => {
     const tree = wrapper(<Divider/>, "shallow");
     expect(tree).toMatchSnapshot();
   });
 });
 