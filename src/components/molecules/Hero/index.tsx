import { Typography } from "@mui/material";
import { useIntl } from "react-intl";
import Breadcrumbs from "../Breadcrumbs";
import { StyledHero } from "./styles";

type HeroProps = {};

const links = [
  {
    href: "/",
    labelId: "home",
  },
  {
    href: "/",
    labelId: "shop",
  },
  {
    href: "/",
    labelId: "page3",
  },
];

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
        {formatMessage({ id: "shop" })}
      </Typography>
      <Breadcrumbs links={links} />
    </StyledHero>
  );
};

export default Hero;
