import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductGridCard from "./index";
import ProductGridCardProps from "./index";

export default {
  title: "molecules/ProductGridCard",
  component: ProductGridCard,
  args: {
    data: {
      id: "1",
      title: "Rustic Metal Fish",
      price: 289.0,
      image: require("../../../assets/vegetableHero.jpg"),
    },
    onInsert: () => {},
  },
} as ComponentMeta<typeof ProductGridCardProps>;

export const Default: ComponentStory<typeof ProductGridCardProps> = (args) => (
  <Box width="300px" height="250px">
    <ProductGridCard {...args} />
  </Box>
);
