/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { wrapper } from "../../../helpers/enzymeWrapper";
 import { Typography } from "@mui/material";
 import MuiLink from "./index";
 
 describe("MuiLink atom", () => {
   it("renders correctly", () => {
     const tree = wrapper(  
     <MuiLink href="./" >
        <Typography component="span" variant="h6" textTransform="uppercase">
            Link
        </Typography>
      </MuiLink>, "shallow");
     expect(tree).toMatchSnapshot();
   });
 });
 