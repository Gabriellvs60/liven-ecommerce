import { Box, Grid } from "@mui/material";
import React from "react";
import ProductGridCard from "../../components/molecules/ProductGridCard";
// import ListTool from "../../components/organisms/ListTool";
import MainTemplate from "../../components/templates/mainTemplate";

const ProductsPage: React.FC = () => {
  return (
    <MainTemplate>
      <Box display="flex" alignItems="center" flexDirection="column">
        {/* <Box mt={3} width="100%">
          <ListTool />
        </Box> */}
        <Grid container rowSpacing={1} mt={2} width={"70%"} pb={2}>
          <Grid item md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item md={3}>
            <ProductGridCard />
          </Grid>
          <Grid item md={3}>
            <ProductGridCard />
          </Grid>
        </Grid>
      </Box>
    </MainTemplate>
  );
};

export default ProductsPage;
