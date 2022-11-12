import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../redux/store/store";
import { ComputersPage } from "./ComputersPage";

describe("Given ComputersPage component", () => {
    describe("When we render the component", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <ComputersPage />
                </Provider>
            </Router>
        );

        test("Then it should display Computers inside the header", () => {
            expect(screen.getByText(/Computers/i)).toBeInTheDocument();
        });
    });
});
