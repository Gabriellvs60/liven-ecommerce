import React, { PropsWithChildren } from "react";
import AppBar from "../../organisms/Appbar";
import Hero from "../../molecules/Hero";
import { ChildrenContainer, StyledContainer, StyledFab } from "./styles";
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
    <StyledContainer>
      <AppBar onClickBadge={onClickBadge} />
      <Hero />
      <ChildrenContainer id="main" component="main">
        {children}
        {onClickFab && (
          <StyledFab
            color="secondary"
            onClick={onClickFab}
            data-cy="fab-open-drawer-cart"
          >
            <HiOutlineShoppingBag fontSize="20px" />
          </StyledFab>
        )}
      </ChildrenContainer>
    </StyledContainer>
  );
};

export default MainTemplate;
