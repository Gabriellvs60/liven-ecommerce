import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import Card from "../../atoms/Card";
import { StyledDivider } from "../../atoms/Divider/styles";
import IconButton from "../IconButton";
import { StyledActions, TitleContainer, InfoContainer } from "./styles";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useIntl } from "react-intl";
import { ProductProps } from "../../../pages/products/productsPage";
import { useTheme } from "@emotion/react";

type ProductGridCardProps = {
  data: ProductProps;
  onInsert: (e: ProductProps) => void;
};

const ProductGridCard: React.FC<ProductGridCardProps> = ({
  data,
  onInsert,
}) => {
  const { title, price } = data || {};
  const { palette } = useTheme();
  const { formatMessage } = useIntl();
  return (
    <Card
      height="343px"
      p={0.5}
      bgcolor={palette.background.default}
      data-cy="product-grid-card"
    >
      <TitleContainer id="title-container">
        <Typography
          fontWeight={500}
          variant="subtitle1"
          color="text"
          mb={1}
          textAlign="center"
          textTransform="uppercase"
        >
          {title}
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
        </StyledActions>
      </TitleContainer>

      <Box height="70%">
        <CardMedia
          height="100%"
          component="img"
          style={{ borderRadius: "4px" }}
          image={`${data.image}?random=${data.id}`}
          alt="Product Image"
        />
      </Box>
    </Card>
  );
};

export default ProductGridCard;
