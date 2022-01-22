import Box from "@mui/material/Box";
import React, { PropsWithChildren } from "react";
import AppBar from "../molecules/Appbar";
import Hero from "../molecules/Hero";

type MainTemplateProps = PropsWithChildren<{}>;

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar />
      <Hero />
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default MainTemplate;
