import { Box, Button, Drawer, DrawerProps, Typography } from "@mui/material";

import React from "react";
import IconButton from "../../molecules/IconButton";
import {
  StyledDrawerActions,
  StyledDrawerContent,
  StyledDrawerTitle,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { useIntl } from "react-intl";

type CustomProps = {};

type ProductDrawerProps = CustomProps & DrawerProps;

const ProductDrawer: React.FC<ProductDrawerProps> = ({
  anchor = "right",
  open,
  onClose,
}: ProductDrawerProps) => {
  const { formatMessage } = useIntl();
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: "350px" },
      }}
    >
      <StyledDrawerTitle>
        <Typography variant="subtitle1" textTransform="uppercase">
          {formatMessage({ id: "shoppingCart" })}
        </Typography>
        <IconButton sx={{ p: "10px" }} aria-label="close-drawer-btn">
          <AiOutlineClose fontSize="18px" />
        </IconButton>
      </StyledDrawerTitle>
      <StyledDrawerContent>
        <Box height={900}>Content</Box>
      </StyledDrawerContent>
      <StyledDrawerActions>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography
            variant="subtitle1"
            fontWeight={500}
            textTransform="uppercase"
          >
            {formatMessage({ id: "subtotal" })}:
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={500}
            color="primary"
            textTransform="uppercase"
          >
            $120.00
          </Typography>
        </Box>
        <Box mt={1}>
          <Button fullWidth variant="outlined" color="secondary">
            {formatMessage({ id: "viewChart" })}
          </Button>
        </Box>
        <Box mt={1}>
          <Button fullWidth variant="contained" color="secondary">
            {formatMessage({ id: "checkout" })}
          </Button>
        </Box>
      </StyledDrawerActions>
    </Drawer>
  );
};

export default ProductDrawer;
