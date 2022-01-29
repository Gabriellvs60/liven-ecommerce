import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import IconButton from "./index";

export default {
  title: "molecules/IconButton",
  component: IconButton,
  args: {
    handleDrawerClose: () => {},
    withBackground: true,
  },
} as ComponentMeta<typeof IconButton>;

export const Default: ComponentStory<typeof IconButton> = (args: any) => (
  <IconButton {...args}>
    <HiOutlineShoppingBag fontSize="20px" />
  </IconButton>
);

export const WithBadgeCount: ComponentStory<typeof IconButton> = (
  args: any
) => (
  <IconButton {...args} badgeCount={2}>
    <HiOutlineShoppingBag fontSize="20px" />
  </IconButton>
);

export const WithBackgroundColorHover: ComponentStory<typeof IconButton> = (
  args: any
) => (
  <IconButton {...args} bgColorHover="#838383">
    <HiOutlineShoppingBag fontSize="20px" />
  </IconButton>
);

export const WithoutBackground: ComponentStory<typeof IconButton> = (
  args: any
) => (
  <IconButton {...args} withBackground={false}>
    <HiOutlineShoppingBag fontSize="20px" />
  </IconButton>
);
