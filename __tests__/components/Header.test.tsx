import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/Header";

describe("Header", () => {
  it("renders the header correctly", () => {
    render(
      <Header.Root>
        <Header.Logo />
        <Header.ThemeToggler initialTheme="light" />
      </Header.Root>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();

    expect(screen.getByText("Movies")).toBeInTheDocument();

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles theme when clicking the button", () => {
    render(<Header.ThemeToggler initialTheme="light" />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.classList.contains("light")).toBe(false);

    fireEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(document.documentElement.classList.contains("light")).toBe(true);
  });
});
