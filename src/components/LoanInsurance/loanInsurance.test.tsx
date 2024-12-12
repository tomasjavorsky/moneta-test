import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { getLoanCalculation } from "../../utils/api/loan-calculation";
import App from "../../App";

describe("LoanInsurance", () => {
  it("checkboxes display correct selection", async () => {
    render(<App />);

    const addCheckbox = within(
      screen.getByTestId("checkbox-insurance-add")
    ).getByRole("checkbox");

    const removeCheckbox = within(
      screen.getByTestId("checkbox-insurance-remove")
    ).getByRole("checkbox");

    fireEvent.click(addCheckbox);

    expect(addCheckbox).toHaveProperty("checked", true);
    expect(removeCheckbox).toHaveProperty("checked", false);

    fireEvent.click(removeCheckbox);

    expect(removeCheckbox).toHaveProperty("checked", true);
    expect(addCheckbox).toHaveProperty("checked", false);
  });

  it("checkboxes call api after selection", async () => {
    render(<App />);

    vi.mock("../../utils/api/loan-calculation", () => ({
      getLoanCalculation: vi.fn(() => true),
    }));

    const removeCheckbox = within(
      screen.getByTestId("checkbox-insurance-remove")
    ).getByRole("checkbox");

    fireEvent.click(removeCheckbox);

    expect(getLoanCalculation).toHaveBeenCalled();
  });
});
