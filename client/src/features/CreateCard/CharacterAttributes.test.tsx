import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardAttributes from "./CardAttributes";

describe("<CardAttributes/>", () => {
  it("Title input functions correctly", () => {
    render(<CardAttributes />);
    const input = screen.getByPlaceholderText("title");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "title");
    userEvent.type(input, "testTitle");
    expect(input).toHaveValue("testTitle");
  });
  it("Health input functions correctly", () => {
    render(<CardAttributes />);
    const input = screen.getByPlaceholderText("health");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "health");
    userEvent.type(input, "testHealth");
    expect(input).toHaveValue("testHealth");
  });
  it("Image Url input functions correctly", () => {
    render(<CardAttributes />);
    const input = screen.getByPlaceholderText("imgUrl");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "imgUrl");
    userEvent.type(input, "testImgUrl");
    expect(input).toHaveValue("testImgUrl");
  });
});
