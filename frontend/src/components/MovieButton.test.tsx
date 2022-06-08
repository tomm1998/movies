import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";
import MovieButton from "./MovieButton";

describe("Card", () => {
  it("renders", () => {
    const wrapper = render(<MovieButton label="label" />);
    expect(wrapper.container).toMatchSnapshot();
  });

  it("does handle click", () => {
    const mock = vi.fn();
    expect(mock).not.toHaveBeenCalledOnce();
    render(<MovieButton onClick={mock} label="label" />);

    fireEvent.click(screen.getByText("label"));
    expect(mock).toHaveBeenCalledOnce();
  });
});
