import { describe, expect, it, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "../pages";

describe("Home, Successfully build HTML Document property", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  it("Main 태그안에 있는 h1 렌더링", () => {
    expect(
      main.getByRole("heading", {
        level: 1,
        name: "Let's Compare the performance of two testing tools",
      })
    ).toBeDefined();
  });
  const button = within(main.getByRole("button"));
  expect(button.getByRole("img", { name: /KakaoTalk Logo/i })).toBeDefined();
});
