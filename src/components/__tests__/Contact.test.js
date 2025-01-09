import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("testing the contact us page", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
