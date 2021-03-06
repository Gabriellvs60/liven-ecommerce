import { Box, InputBase } from "@mui/material";
import { useIntl } from "react-intl";
import IconButton from "../IconButton";
import { StyledContainer } from "./styles";
import { FiGrid } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

type ListToolProps = {
  hasListView?: boolean;
};

const ListTool: React.FC<ListToolProps> = ({ hasListView = false }) => {
  const { formatMessage } = useIntl();

  return (
    <StyledContainer>
      <Box mr={2}>
        <IconButton color="secondary">
          <FiGrid />
        </IconButton>
        {hasListView && (
          <IconButton color="secondary">
            <FaList />
          </IconButton>
        )}
      </Box>
      <Box display="flex" flexDirection="row">
        <InputBase
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
