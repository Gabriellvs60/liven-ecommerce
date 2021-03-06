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
import ProductListItem from "../../molecules/ProductListItem";
import { ProductProps } from "../../../pages/products/productsPage";

type CustomProps = {
  data: ProductProps[];
  handleRemoveProduct: (e: string) => void;
  onDecrementProduct: (e: string) => void;
  onIncrementProduct: (e: string) => void;
};

type ProductDrawerProps = CustomProps & DrawerProps;

const ProductDrawer: React.FC<ProductDrawerProps> = ({
  anchor = "right",
  data,
  handleRemoveProduct,
  open,
  onDecrementProduct,
  onIncrementProduct,
  onClose,
}: ProductDrawerProps) => {
  const { formatMessage } = useIntl();

  const handleDrawerClose = () => {
    onClose?.({}, "backdropClick");
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    if (data && data.length > 0) {
      data.forEach((product) => {
        subtotal = subtotal + (product.amount || 0) * product.price;
      });
      return subtotal.toFixed(2);
    }
    return subtotal.toFixed(2);
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: "350px" },
      }}
      data-cy="product-drawer"
    >
      <StyledDrawerTitle id="drawer-title">
        <Typography variant="subtitle1" textTransform="uppercase">
          {formatMessage({ id: "shoppingCart" })}
        </Typography>
        <IconButton
          data-cy="close-drawer-btn"
          sx={{ p: "10px" }}
          aria-label="close-drawer-btn"
          onClick={handleDrawerClose}
        >
          <AiOutlineClose fontSize="18px" />
        </IconButton>
      </StyledDrawerTitle>
      <StyledDrawerContent>
        {data.length === 0 ? (
          <Typography>{formatMessage({ id: "cartIsEmpty" })}</Typography>
        ) : (
          data.map((product) => (
            <ProductListItem
              key={product.id}
              id={product.id}
              image={product.image}
              amount={product.amount}
              name={product.title}
              price={product.price}
              onDecrementProduct={onDecrementProduct}
              onIncrementProduct={onIncrementProduct}
              onRemove={handleRemoveProduct}
            />
          ))
        )}
      </StyledDrawerContent>
      <StyledDrawerActions>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography
            variant="h6"
            fontWeight={500}
            textTransform="uppercase"
          >
            {formatMessage({ id: "subtotal" })}:
          </Typography>
          <Typography
            variant="h6"
            fontWeight={500}
            color="primary"
            textTransform="uppercase"
          >
            ${calculateSubtotal()}
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
