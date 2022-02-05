import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductListItem from "./index";
import ProductListItemProps from "./index";

export default {
  title: "molecules/ProductListItem",
  component: ProductListItem,
  args: {
    amount: 1,
    id: "1",
    name: "Tomato",
    image: require("../../../assets/vegetableHero.jpg"),
    price: 12.0,
    onRemove: () => {},
    onDecrementProduct: () => {},
    onIncrementProduct: () => {},
  },
} as ComponentMeta<typeof ProductListItemProps>;

export const Default: ComponentStory<typeof ProductListItemProps> = (args) => (
  <Box width="300px" height="250px">
    <ProductListItem {...args} />
  </Box>
);
