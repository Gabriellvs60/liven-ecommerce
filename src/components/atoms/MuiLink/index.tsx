import { LinkProps as MuiLinkProps } from "@mui/material";
import { colors } from "../../../design/colors";
import { StyledLink } from "./styles";

const MuiLink: React.FC<MuiLinkProps> = ({ href, children }: MuiLinkProps) => {
  return (
    <StyledLink color={colors.white.main} href={href}>
      {children}
    </StyledLink>
  );
};

export default MuiLink;
