import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import ProductGridCard from "../../components/molecules/ProductGridCard";
import ListTool from "../../components/molecules/ListTool";
import MainTemplate from "../../components/templates/MainTemplate/mainTemplate";
import { productsData } from "./products.mock";
import ProductDrawer from "../../components/organisms/ProductDrawer";
import { useCartInfo } from "../../store";
import { toast } from 'react-toastify'
import { useIntl } from 'react-intl';

export type ProductProps = {
  id: string;
  name: string;
  price: string;
  image: string;
  stock: number;
  amount?: number;
};

const ProductsPage: React.FC = () => {
  const {formatMessage} = useIntl();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const cartProducts = useCartInfo();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAddProduct = (product: ProductProps) => {
    const cartList = cartProducts.state.cart;
    if (cartList.some((item) => item.id === product.id)) {
      handleIncrementProduct(product.id);
    } else {
      const updatedProductsList = [...cartList, { ...product, amount: 1 }];
      saveCartList(updatedProductsList);
    }
    toast.success(
      formatMessage({id: "productAddedMessage"})
    )
  };

  const handleIncrementProduct = (id: string) => {
    const cartList = cartProducts.state.cart;
    const updatedCartList = cartList.map((product) => {
      if(product.id === id){
        return {
          ...product,
          amount: product.amount + 1
        }
      }
      return product;
    });
    saveCartList(updatedCartList);
  }

  const handleDecrementProduct = (id: string) => {
    const cartList = cartProducts.state.cart;
    const productToDecrement = cartList.find((productOnCart) => {
      return productOnCart.id === id;
    });
    if(productToDecrement.amount === 1){
      handleRemoveProduct(productToDecrement.id)
    }else{
      const updatedCartList = cartList.map((product) => {
        if(product.id === id){
         return {
          ...product, 
          amount: product.amount = product.amount -1};
        }
        return product
      });
      saveCartList(updatedCartList);
    }
  }

  const handleRemoveProduct = (id: string) => {
    const cartList = cartProducts.state.cart;
      const updatedProductsList = [
        ...cartList.filter((productToAdd) => productToAdd.id !== id),
      ];
      saveCartList(updatedProductsList);
      toast.warn(
        formatMessage({id: "productRemovedMessage"})
      )
  };

  const saveCartList = (productsList: any) => {
    cartProducts.dispatch({
      type: "SET_CART",
      payload: { cart: productsList },
    });
  };

  return (
    <MainTemplate onClickBadge={toggleDrawer} onClickFab={toggleDrawer}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="70%"
      >
        <Box
          mt={3}
          width="100%"
          display="flex"
          justifyContent="flex-end"
          flexDirection="row"
        >
          <ListTool />
        </Box>
        <Grid
          width="70%"
          container
          rowSpacing={2}
          gap={0}
          mt={3}
          display="flex"
          justifyContent="center"
          columnSpacing={{ xs: 10, sm: 2, md: 2, lg: 10, xl: 10 }}
        >
          {productsData.map((product: ProductProps) => (
            <Grid
              item
              zeroMinWidth
              xl={3}
              lg={4}
              md={4}
              sm={6}
              key={`product-item${product.id}`}
            >
              <ProductGridCard data={product} onInsert={handleAddProduct} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <ProductDrawer
        data={cartProducts.state.cart}
        handleRemoveProduct={handleRemoveProduct}
        open={drawerOpen}
        onDecrementProduct={handleDecrementProduct}
        onIncrementProduct={handleIncrementProduct}
        onClose={toggleDrawer}
      />
    </MainTemplate>
  );
};

export default ProductsPage;
