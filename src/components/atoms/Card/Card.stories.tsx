import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./index";

export default {
  title: "atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = () => (
  <Card width="100px" height="200px">
    Card example
  </Card>
);
