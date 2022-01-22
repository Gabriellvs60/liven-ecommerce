import { Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { StyledHero } from "./styles";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const { formatMessage } = useIntl();
  return (
    <StyledHero>
      <Typography
        variant="h1"
        fontWeight={500}
        color="white"
        textTransform="uppercase"
      >
        {formatMessage({ id: "Shop" })}
      </Typography>
    </StyledHero>
  );
};

export default Hero;
