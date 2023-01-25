import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateCard from "./CreateCard";

describe("<CreateCard/>", () => {
  it("Elements Toggle Correctly", () => {
    render(<CreateCard />);
    screen.getAllByTestId("element").forEach(async (elementRadioButton) => {
      userEvent.click(elementRadioButton);
      expect(elementRadioButton.getAttribute("value")).toBe(
        screen.getByTestId("element-descriptor").textContent
      );
    });
  });
});
