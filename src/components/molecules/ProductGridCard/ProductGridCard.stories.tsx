import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductGridCard from "./index";

export default {
  title: "molecules/ProductGridCard",
  component: ProductGridCard,
  args: {
    data: {
      id: "1",
      createdAt: "2019-09-02T12:58:54.103Z",
      name: "Rustic Metal Fish",
      price: "289.00",
      stock: 65171,
      image: require("../../../assets/vegetableHero.jpg"),
    },
    onInsert: () => {},
  },
} as ComponentMeta<typeof ProductGridCard>;

export const Default: ComponentStory<typeof ProductGridCard> = (args: any) => (
  <Box width="300px" height="250px">
    <ProductGridCard {...args} />
  </Box>
);
