import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";

test("renders the sidebar", () => {
  render(<Sidebar isOpen={true} onClose={() => {}} />);
  const linkElement = screen.getByText(/WE/i);
  expect(linkElement).toBeInTheDocument();
});
