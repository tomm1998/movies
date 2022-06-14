import { render } from "@testing-library/react";
import React from "react";
import { describe, it, expect } from "vitest";
import Card from "./Card";

describe("Card", () => {
  it("renders", () => {
    const wrapper = render(<Card children="child" />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
