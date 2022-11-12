import { findByRole, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../redux/store/store";
import { ShopItem } from "./ShopItem";
import userEvent from "@testing-library/user-event";

describe("Given App component", () => {
    describe("When we render the component", () => {
        test("Then it should display TurboPC 500", async () => {
            const mockItem = {
                id: 1,
                category: "computer",
                offer: true,
                price: 700,
                name: "TurboPC 500",
                imageURL:
                    "https://thumb.pccomponentes.com/w-530-530/articles/82/826902/1449-pccom-bronze-amd-ryzen-7-5700g-16gb-500gb-ssd-1tb.jpg",
                details: {
                    RAM: "8GB",
                    "Hard Drive": "250GB SSD",
                    "Graphic Card": "GTX 3000",
                },
            };

            render(
                <Router>
                    <Provider store={appStore}>
                        <ShopItem item={mockItem} />
                    </Provider>
                </Router>
            );
            await screen.findByText(/TurboPC 500/i);
        });
        test("Then it should click the button", async () => {
            const mockItem = {
                id: 1,
                category: "computer",
                offer: true,
                price: 700,
                name: "TurboPC 500",
                imageURL:
                    "https://thumb.pccomponentes.com/w-530-530/articles/82/826902/1449-pccom-bronze-amd-ryzen-7-5700g-16gb-500gb-ssd-1tb.jpg",
                details: {
                    RAM: "8GB",
                    "Hard Drive": "250GB SSD",
                    "Graphic Card": "GTX 3000",
                },
            };

            render(
                <Router>
                    <Provider store={appStore}>
                        <ShopItem item={mockItem} />
                    </Provider>
                </Router>
            );

            const button1 = screen.getByRole("button");

            const handleAdd = jest.fn();
            userEvent.click(button1);
            expect(handleAdd).toBeCalled();
        });
    });
});
