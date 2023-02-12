import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render components", () => {
  test("Render component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByText("Merge");
    expect(navbarElement).toBeInTheDocument();
  });

  test("Render component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByText("Insertion");
    expect(navbarElement).toBeInTheDocument();
  });

  test("Render component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByText("Selection");
    expect(navbarElement).toBeInTheDocument();
  });

  test("Render component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByText("Quicksort");
    expect(navbarElement).toBeInTheDocument();
  });
  test("Render component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByText("Counting");
    expect(navbarElement).toBeInTheDocument();
  });

  test("Render component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByText("Bubble");
    expect(navbarElement).toBeInTheDocument();
  });

  test("Render component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByText("Shell");
    expect(navbarElement).toBeInTheDocument();
  });
});
