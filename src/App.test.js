import { fireEvent, render, screen } from "@testing-library/react";
import Main from "../src/Components/Main";

test("Renders the botton", () => {
  render(<Main></Main>);
  const headingElement = screen.getByText("book_a_table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
});
