import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import IconButton from "./index";
import IconButtonProps from "./index";

export default {
  title: "molecules/IconButton",
  component: IconButton,
  args: {
    handleDrawerClose: () => {},
    withBackground: true,
  },
} as ComponentMeta<typeof IconButton>;

export const Default: ComponentStory<typeof IconButtonProps> = (args) => (
  <IconButton {...args}>
    <HiOutlineShoppingBag fontSize="20px" />
  </IconButton>
);

export const WithBadgeCount: ComponentStory<typeof IconButtonProps> = (
  args
) => (
  <IconButton {...args} badgeCount={2}>
    <HiOutlineShoppingBag fontSize="20px" />
  </IconButton>
);

export const WithBackgroundColorHover: ComponentStory<typeof IconButtonProps> = (
  args
) => (
  <IconButton {...args} bgColorHover="#838383">
    <HiOutlineShoppingBag fontSize="20px" />
  </IconButton>
);

export const WithoutBackground: ComponentStory<typeof IconButtonProps> = (
  args
) => (
  <IconButton {...args} withBackground={false}>
    <HiOutlineShoppingBag fontSize="20px" />
  </IconButton>
);
