import { screen, render, fireEvent } from "@testing-library/react";
import PopUpComponent from "./PopUpComponent";

test("renders the text correctly", () => {
  const insertText = "Some Amazing Text";
  render(<PopUpComponent insertText={insertText} onOkClick={() => {}} onCancelClick={() => {}} />);
  const textElement = screen.getByText(insertText);
  expect(textElement).toBeInTheDocument();
});

test("calls the onOkClick function when OK button is clicked", () => {
  const onOkClick = jest.fn();
  render(<PopUpComponent insertText="" onOkClick={onOkClick} onCancelClick={() => {}} />);
  const okButton = screen.getByText("OK");
  fireEvent.click(okButton);
  expect(onOkClick).toHaveBeenCalled();
});

test("calls the onCancelClick function when Cancel button is clicked", () => {
  const onCancelClick = jest.fn();
  render(<PopUpComponent insertText="" onOkClick={() => {}} onCancelClick={onCancelClick} />);
  const cancelButton = screen.getByText("Cancel");
  fireEvent.click(cancelButton);
  expect(onCancelClick).toHaveBeenCalled();
});
