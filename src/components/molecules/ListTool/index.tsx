import { Box, Divider, InputBase } from "@mui/material";
import { useIntl } from "react-intl";
import IconButton from "../IconButton";
import { StyledContainer } from "./styles";
import { FiGrid } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

type ListToolProps = {};

const ListTool: React.FC<ListToolProps> = () => {
  const { formatMessage } = useIntl();

  return (
    <StyledContainer>
      <Box mr={2}>
        <IconButton color="secondary">
          <FiGrid />
        </IconButton>
        <IconButton color="secondary">
          <FaList />
        </IconButton>
      </Box>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Box>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={formatMessage({ id: "searchAProduct" })}
          inputProps={{ "aria-label": "search a product" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <BiSearchAlt />
        </IconButton>
      </Box>
    </StyledContainer>
  );
};

export default ListTool;
