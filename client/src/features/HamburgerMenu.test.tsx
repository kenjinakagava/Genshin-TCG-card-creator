import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

describe("<HamburgerMenu/>", () => {
  it("Toggles Correctly", () => {
    render(
      <BrowserRouter>
        <HamburgerMenu />
      </BrowserRouter>
    );
    userEvent.click(screen.getByTestId("hamburgerMenu"));
    screen.getByTestId("hamburgerClose");
    userEvent.click(screen.getByTestId("hamburgerMenu"));
    screen.getByTestId("hamburgerOpen");
  });
  it("Closes when changing page", () => {
    render(
      <BrowserRouter>
        <HamburgerMenu />
      </BrowserRouter>
    );
    userEvent.click(screen.getByTestId("hamburgerMenu"));
    screen.getByTestId("hamburgerClose");
    screen.getAllByTestId("hamburgerLink").forEach((link) => {
      userEvent.click(link);
      userEvent.click(screen.getByTestId("hamburgerOpen"));
    });
  });
});

export {};
