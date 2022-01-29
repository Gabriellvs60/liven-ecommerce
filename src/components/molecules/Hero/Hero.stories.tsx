import { ComponentStory, ComponentMeta } from "@storybook/react";
import Hero from "./index";

export default {
  title: "molecules/Hero",
  component: Hero,
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
} as ComponentMeta<typeof Hero>;

export const Default: ComponentStory<typeof Hero> = (args: any) => (
  <Hero {...args} />
);
