import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, Typography } from "@mui/material";
import React from "react";
import { AppBarContainer, StyledAppBar, StyledToolbar } from "./styles";
import IconButton from "../IconButton";
import { HiOutlineShoppingBag } from "react-icons/hi";

import logo from "../../../assets/logo.jpg";

type CustomProps = {
  onClickBadge?: () => void;
};

type AppBarProps = CustomProps & MuiAppBarProps;

const AppBar: React.FC<AppBarProps> = ({ onClickBadge }) => {
  return (
    <StyledAppBar position="static">
      <AppBarContainer>
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
            {onClickBadge && (
              <IconButton badgeCount={2} onClick={onClickBadge}>
                <HiOutlineShoppingBag fontSize="20px" />
              </IconButton>
            )}
          </Box>
        </StyledToolbar>
      </AppBarContainer>
    </StyledAppBar>
  );
};

export default AppBar;
