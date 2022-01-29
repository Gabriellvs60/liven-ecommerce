import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import Card from "../../atoms/Card";
import { StyledDivider } from "../../atoms/Divider/styles";
import IconButton from "../IconButton";
import { StyledActions, TitleContainer, InfoContainer } from "./styles";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useIntl } from "react-intl";
import { ProductProps } from '../../../pages/products/productsPage';

type ProductGridCardProps = {
  data: ProductProps;
  onInsert: (e: ProductProps) => void;
};

const ProductGridCard: React.FC<ProductGridCardProps> = ({
  data,
  onInsert,
}) => {
  const { name, price, stock} = data || {};

  const { formatMessage } = useIntl();
  return (
    <Card height="343px" p={0.5}>
      <TitleContainer>
        <Typography
          fontWeight={500}
          variant="subtitle1"
          color="text"
          mb={1}
          textAlign="center"
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
          <IconButton withBackground onClick={() => onInsert(data)}>
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
