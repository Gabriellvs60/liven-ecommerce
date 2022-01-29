import React from "react";
import { mount, render, shallow } from "enzyme";

import ThemeProvider from "../design/ThemeProvider";
type RenderMethods = "mount" | "render" | "shallow";

export function wrapper(
  node: React.ReactNode,
  method?: RenderMethods,
  options?: any // eslint-disable-line
): any {
  const component = <ThemeProvider>{node}</ThemeProvider>;

  if (method === "mount") return mount(component, options);

  if (method === "shallow") return shallow(component, options);

  return render(component, options);
}
