import { Box, Grid } from "@mui/material";
import React from "react";
import ProductGridCard from "../../components/molecules/ProductGridCard";
import ListTool from "../../components/molecules/ListTool";
import MainTemplate from "../../components/templates/mainTemplate";

const ProductsPage: React.FC = () => {
  return (
    <MainTemplate>
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
          justifyContent="flex-start"
          flexDirection="row"
        >
          <ListTool />
        </Box>
        <Grid
          width="100%"
          container
          rowSpacing={2}
          flex-direction="row"
          mt={3}
          display="flex"
        >
          <Grid item zeroMinWidth md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item zeroMinWidth md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item zeroMinWidth md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item zeroMinWidth md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item zeroMinWidth md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item zeroMinWidth md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item zeroMinWidth md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item zeroMinWidth md={3}>
            <ProductGridCard />
          </Grid>
        </Grid>
      </Box>
    </MainTemplate>
  );
};

export default ProductsPage;
