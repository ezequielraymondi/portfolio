import { render } from "@testing-library/react";
import App from "./App";

test("renderiza el nombre en el hero", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".home__title")).toHaveTextContent("Ezequiel Raymondi");
  expect(container.querySelector(".home__subtitle")).toHaveTextContent("Desarrollador Web");
});
