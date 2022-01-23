import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import Card from "../../atoms/Card";
import { StyledDivider } from "../../atoms/Divider/styles";
import IconButton from "../IconButton";
import { StyledActions, TitleContainer, InfoContainer } from "./styles";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useIntl } from "react-intl";

type ProductGridCardProps = {
  name: string;
  price: string;
  image: string;
  stock: number;
};

const ProductGridCard: React.FC<ProductGridCardProps> = ({
  image,
  name,
  price,
  stock,
}) => {
  const { formatMessage } = useIntl();
  return (
    <Card width="269px" height="343px" p={0.5}>
      <TitleContainer>
        <Typography
          fontWeight={500}
          variant="subtitle1"
          color="text"
          mb={1}
          textTransform="uppercase"
        >
          {name}
        </Typography>

        <InfoContainer id="infoBox">
          <Typography fontWeight={700} variant="subtitle1" color="primary">
            {formatMessage({ id: "currency" })} {price}
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
            {stock} {formatMessage({ id: "inStock" })}
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
