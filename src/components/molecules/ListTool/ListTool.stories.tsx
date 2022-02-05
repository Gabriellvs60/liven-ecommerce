import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListTool from "./index";
import ListToolProps from "./index";

export default {
  title: "molecules/ListTool",
  component: ListTool,
  args: {
    hasListView: false,
  },
} as ComponentMeta<typeof ListToolProps>;

export const Default: ComponentStory<typeof ListToolProps> = (args) => (
  <ListTool {...args} />
);
