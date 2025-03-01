import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("renders the footer correctly", () => {
    render(<Footer />);

    expect(
      screen.getByText(/2025 © Todos os direitos reservados a/i),
    ).toBeInTheDocument();

    expect(screen.getByText(/Cubos Movies/i)).toBeInTheDocument();
  });
});
