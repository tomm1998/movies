import { render } from "@testing-library/react";
import React from "react";
import { MovieView } from "./movie-view";

import { describe, expect, it, vi } from "vitest";

vi.mock("../../renderProps/MovieFetcher", () => ({
  MovieFetcher: ({ children }) =>
    children([
      {
        movieName: "Episode VII – The Force Awakens",
        releaseDate: "2021-03-12",
      },
    ]),
}));
describe("Movies", () => {
  it("renders movies", () => {
    const { container } = render(<MovieView />);
    expect(container).toMatchSnapshot();
  });
});
