import { render, screen, within } from "@testing-library/react";
import Planner from "./Planner";
import { createServer } from "miragejs";
import scheduleMock from "../../mocks/Schedule.mock";

const setupComponent = () => {
  render(<Planner />);
};

describe("Planner", () => {
  let server: any;

  beforeEach(() => {
    server = createServer({
      routes() {
        this.namespace = "api";

        this.get("http://localhost:8080/schedule", (schema) => {
          return scheduleMock;
        });
      },
    });
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should render schedule items correctly", async () => {
    setupComponent();
    const scheduleItems = await screen.findAllByRole("listitem");
    expect(
      within(scheduleItems[0]).getByRole("heading", {
        name: "Monday",
      })
    ).toBeInTheDocument();
    expect(
      within(scheduleItems[0]).getByRole("heading", {
        name: "1 April",
      })
    ).toBeInTheDocument();

    expect(
      within(scheduleItems[1]).getByText("No visits yet")
    ).toBeInTheDocument();
  });
});
