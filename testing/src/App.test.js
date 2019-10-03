import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App, { addByOne } from "./App";

it("renders a p with Balls text", () => {
  const wrapper = rtl.render(<App />);
  const hasBallsText = wrapper.queryByText(/balls/i);
  expect(hasBallsText).toBeInTheDocument();
});

test("addByOne add 1 to current value", () => {
  expect(addByOne(10)).toBe(11);
});
