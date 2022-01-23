import { Box } from "@mui/material";
import React from "react";
import ListTool from "../../components/organisms/ListTool";
import MainTemplate from "../../components/templates/mainTemplate";

const ProductsPage: React.FC = () => {
  return (
    <MainTemplate>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="50%"
      >
        <Box mt={3} width="100%">
          <ListTool />
        </Box>
        <Box mt={3}>List</Box>
      </Box>
    </MainTemplate>
  );
};

export default ProductsPage;
