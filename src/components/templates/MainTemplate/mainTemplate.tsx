import Box from "@mui/material/Box";
import React, { PropsWithChildren } from "react";
import AppBar from "../../organisms/Appbar";
import Hero from "../../molecules/Hero";
import { StyledContainer, StyledFab } from "./styles";
import { HiOutlineShoppingBag } from "react-icons/hi";

type MainTemplateProps = PropsWithChildren<{
  onClickBadge?: () => void;
  onClickFab?: () => void;
}>;

const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
  onClickBadge,
  onClickFab,
}) => {
  return (
    <StyledContainer sx={{ flexGrow: 1 }}>
      <AppBar onClickBadge={onClickBadge} />
      <Hero />
      <Box
        id="main"
        component="main"
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="100%"
        pb={3}
      >
        {children}
        {onClickFab && (
          <StyledFab color="secondary" onClick={onClickFab}>
            <HiOutlineShoppingBag fontSize="20px" />
          </StyledFab>
        )}
      </Box>
    </StyledContainer>
  );
};

export default MainTemplate;
