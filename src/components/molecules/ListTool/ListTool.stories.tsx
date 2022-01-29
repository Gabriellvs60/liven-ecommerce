import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListTool from "./index";

export default {
  title: "molecules/ListTool",
  component: ListTool,
  args: {
    hasListView: false,
  },
} as ComponentMeta<typeof ListTool>;

export const Default: ComponentStory<typeof ListTool> = (args: any) => (
  <ListTool {...args} />
);
