import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, Typography } from "@mui/material";
import React from "react";
import { AppBarContainer, StyledAppBar, StyledToolbar } from "./styles";
import IconButton from "../../molecules/IconButton";
import { HiOutlineShoppingBag } from "react-icons/hi";

import logo from "../../../assets/logo.jpg";
import { useCartInfo } from "../../../store";

type CustomProps = {
  onClickBadge?: () => void;
};

export type AppBarProps = CustomProps & MuiAppBarProps;

const AppBar: React.FC<AppBarProps> = ({ onClickBadge }) => {
  const cartProducts = useCartInfo();
  const cartLength = cartProducts.state.cart.length;

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
              <IconButton badgeCount={cartLength} onClick={onClickBadge}>
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
