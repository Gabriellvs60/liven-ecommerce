import { ComponentStory, ComponentMeta } from "@storybook/react";
import Hero from "./index";

export default {
  title: "molecules/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

export const Default: ComponentStory<typeof Hero> = () => <Hero />;
