import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Breadcrumbs from "./index";
import BreadcrumbsProps from "./index";

export default {
  title: "molecules/Breadcrumbs",
  component: Breadcrumbs,
  args: {
    links: [
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
    ],
  },
} as ComponentMeta<typeof Breadcrumbs>;

export const Default: ComponentStory<typeof BreadcrumbsProps> = (args) => (
  <Box bgcolor="#2b2b2b">
    <Breadcrumbs {...args} />
  </Box>
);
