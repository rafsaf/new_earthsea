import Login from "./login";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

test("Login component test", async () => {
  const login = render(
    <MemoryRouter initialEntries={[{ pathname: "/login" }]}>
      <Login />
    </MemoryRouter>
  );

  expect(screen.getByTestId("error")).toHaveTextContent("");

  await act(async () => {
    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "chuck" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "norris" },
    });
    fireEvent.click(screen.getByText(/submit/i));
  });
  expect(screen.getByTestId("error")).toHaveTextContent("");
});
