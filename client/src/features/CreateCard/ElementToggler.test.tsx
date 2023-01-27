import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateACardPage from "../../pages/create-a-card/CreateACardPage";

describe("<CreateACardPage/>", () => {
  it("Elements Toggle Correctly", () => {
    render(<CreateACardPage />);
    screen.getAllByTestId("element").forEach(async (elementRadioButton) => {
      userEvent.click(elementRadioButton);
      expect(elementRadioButton.getAttribute("value")).toBe(
        screen.getByTestId("element-descriptor").textContent
      );
    });
  });
});
