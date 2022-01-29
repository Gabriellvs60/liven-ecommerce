import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { colors } from "../../../design/colors";
import IconButton from "../IconButton";
import { ActionsBoxContainer, StyledContainer } from "./styles";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsFillTrash2Fill } from "react-icons/bs";

type ProductListItemProps = {
  amount?: number;
  id: string;
  name: string;
  imageUrl: string;
  onRemove: (e: string) => void;
  onDecrementProduct: (e:string) => void;
  onIncrementProduct: (e: string)=> void;
  price: string;
};

const ProductListItem: React.FC<ProductListItemProps> = ({
  amount = 0,
  id,
  imageUrl,
  name,
  onDecrementProduct,
  onIncrementProduct,
  onRemove,
  price,
}) => {
  const { formatMessage } = useIntl();
  return (
    <StyledContainer>
      <Box>
        <img
          width="70px"
          height="70px"
          src={`${imageUrl}?random=${id}`}
          alt="product"
        />
      </Box>
      <ActionsBoxContainer id="actionsContainer">
        <IconButton onClick={() => onRemove(id)} bgColorHover="transparent">
          <BsFillTrash2Fill fontSize="16px" />
        </IconButton>
        <IconButton onClick={() => onIncrementProduct(id)} bgColorHover="transparent">
          <IoIosAddCircleOutline fontSize="16px" />
        </IconButton>
        <IconButton onClick={() => onDecrementProduct(id)} bgColorHover="transparent">
          <IoRemoveCircleOutline fontSize="16px" />
        </IconButton>
      </ActionsBoxContainer>
      <Box display="flex" flexDirection="column" ml={2} mb={1}>
        <Typography
          fontWeight={400}
          color={colors.doveGray.main}
          component="span"
          variant="subtitle1"
        >
          {name}
        </Typography>
        <Box display="flex" flexDirection="row">
          <Typography fontWeight={400}>{amount}x</Typography>
          <Typography variant="body2" ml={1} fontWeight={400} color="primary">
            {formatMessage({ id: "currency" })}
            {price}
          </Typography>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default ProductListItem;
