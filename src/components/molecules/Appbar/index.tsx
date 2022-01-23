import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledAppBar, StyledToolbar } from "./styles";
import IconButton from "../IconButton";
import { HiOutlineShoppingBag } from "react-icons/hi";

import logo from "../../../assets/logo.jpg";
type CustomProps = {};

type AppBarProps = CustomProps & MuiAppBarProps;

const AppBar: React.FC<AppBarProps> = () => {
  return (
    <StyledAppBar position="static">
      <Box width="100%">
        <StyledToolbar>
          <Box id="appbar-logo">
            <Box display="flex" flexDirection="row" alignItems="center">
              <img width="80px" height="80px" src={logo} alt="logo" />
              <Typography ml={1} variant="subtitle1">
                Liven Ecommerce
              </Typography>
            </Box>
          </Box>
          <Box id="appbar-actions">
            <IconButton color="primary" badgeCount={2}>
              <HiOutlineShoppingBag fontSize="20px" />
            </IconButton>
          </Box>
        </StyledToolbar>
      </Box>
    </StyledAppBar>
  );
};

export default AppBar;
