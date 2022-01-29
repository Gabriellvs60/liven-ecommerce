import React from "react";
import { Global, css } from "@emotion/react";
import { colors } from "./colors";

export const GlobalStyles = (): React.ReactElement => (
  <Global
    styles={css`
      html,
      .root {
        height: 100%;
      }

      body {
        margin: 0px;
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: ${colors.blackMineShaft.main} #fff;
      }

      *::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      *::-webkit-scrollbar-track {
        background: #fff;
      }

      *::-webkit-scrollbar-thumb {
        background-color: ${colors.blackMineShaft.main};
        border-radius: 0px;
      }

      *::-webkit-scrollbar-thumb:hover {
        background: ${colors.blackMineShaft.main};
      }
    `}
  />
);
