import { LinkProps as MuiLinkProps, Typography } from "@mui/material";
import { colors } from "../../../design/colors";
import { StyledLink } from "./styles";

const MuiLink: React.FC<MuiLinkProps> = ({ href, children }) => {
  return (
    <StyledLink color={colors.white.main} href={href}>
      <Typography>{children}</Typography>
    </StyledLink>
  );
};

export default MuiLink;