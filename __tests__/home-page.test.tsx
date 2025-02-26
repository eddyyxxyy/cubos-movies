import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Page", () => {
  it("renders three headings", () => {
    render(<HomePage />);

    const h1 = screen.getByRole("heading", { level: 1 });
    const h2 = screen.getByRole("heading", { level: 2 });
    const h3 = screen.getByRole("heading", { level: 3 });

    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
  });
});
