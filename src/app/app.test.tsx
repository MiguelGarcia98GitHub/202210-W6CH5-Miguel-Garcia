import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../redux/store/store";
import App from "./App";

describe("Given App component", () => {
    describe("When we render the component", () => {
        test("Then it should display 'Computers' inside the header", async () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <App />
                    </Provider>
                </Router>
            );
            await screen.findByText(/Computers/i);
        });
    });
});
