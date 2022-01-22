import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { AppBar as MuiAppBar, Box } from "@mui/material";
import React from "react";
import { StyledToolbar } from "./styles";
import { BsBasket } from "react-icons/bs";
type CustomProps = {};

type AppBarProps = CustomProps & MuiAppBarProps;

const AppBar: React.FC<AppBarProps> = () => {
  return (
    <MuiAppBar position="static">
      <StyledToolbar>
        <Box id="appbar-logo">Logo</Box>
        <Box id="appbar-actions">
          <BsBasket fontSize="18px" />
        </Box>
      </StyledToolbar>
    </MuiAppBar>
  );
};

export default AppBar;
