import { useTheme } from "@emotion/react";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import Card from "../../atoms/Card";

type SkeletonCardProps = {};

const ProductGridCardSkeleton: React.FC<SkeletonCardProps> = () => {
  const { palette } = useTheme();

  return (
    <Card height="343px" p={0.5} bgcolor={palette.background.default}>
      <Skeleton animation="wave" width="100%" height="100%" />
    </Card>
  );
};

export default ProductGridCardSkeleton;
