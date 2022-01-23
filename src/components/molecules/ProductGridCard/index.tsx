import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import Card from "../../atoms/Card";
import { StyledDivider } from "../../atoms/Divider/styles";
import IconButton from "../IconButton";
import { StyledActions, TitleContainer, InfoContainer } from "./styles";
import { HiOutlineShoppingBag } from "react-icons/hi";

type ProductGridCardProps = {
  // name: string;
  // price: string;
  // image: string;
  // stock: string;
};

const ProductGridCard: React.FC<ProductGridCardProps> = () => {
  return (
    <Card width="269px" height="343px" p={0.5}>
      <TitleContainer>
        <Typography fontWeight={500} variant="subtitle1" color="text" mb={1}>
          BLOOD ORANGE FREEZE
        </Typography>

        <InfoContainer id="infoBox">
          <Typography fontWeight={700} variant="subtitle1" color="primary">
            $120.00
          </Typography>
          <Box width="40px" mt={1}>
            <StyledDivider />
          </Box>
        </InfoContainer>

        <StyledActions id="actionsBox">
          <IconButton withBackground>
            <HiOutlineShoppingBag />
          </IconButton>
          <Typography variant="subtitle2" color="inherit">
            300 In Stock
          </Typography>
        </StyledActions>
      </TitleContainer>

      <Box height="70%">
        <CardMedia
          height="100%"
          component="img"
          style={{ borderRadius: "4px" }}
          image={require("../../../assets/product_orange.jpg")}
          alt="Product Image"
        />
      </Box>
    </Card>
  );
};

export default ProductGridCard;
