import { Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { StyledContainer } from "./styles";

type ListToolProps = {};

const ListTool: React.FC<ListToolProps> = () => {
  const { formatMessage } = useIntl();
  return (
    <StyledContainer>
      <Typography
        variant="h1"
        fontWeight={500}
        color="white"
        textTransform="uppercase"
      >
        {formatMessage({ id: "Shop" })}
      </Typography>
    </StyledContainer>
  );
};

export default ListTool;
