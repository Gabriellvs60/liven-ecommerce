import { Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MuiLink from "./index";

export default {
  title: "atoms/MuiLink",
  component: MuiLink,
} as ComponentMeta<typeof MuiLink>;

export const Primary: ComponentStory<typeof MuiLink> = () => (
  <MuiLink>
    <Typography
      component="span"
      variant="h6"
      textTransform="uppercase"
      color="secondary"
    >
      MUI link example
    </Typography>
  </MuiLink>
);
