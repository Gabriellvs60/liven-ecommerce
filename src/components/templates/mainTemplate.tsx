import Box from "@mui/material/Box";
import React, { PropsWithChildren } from "react";
import AppBar from "../molecules/Appbar";
import Hero from "../molecules/Hero";

type MainTemplateProps = PropsWithChildren<{
  onClickBadge?: () => void;
}>;

const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
  onClickBadge,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar onClickBadge={onClickBadge} />
      <Hero />
      <Box
        component="main"
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="100%"
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainTemplate;
