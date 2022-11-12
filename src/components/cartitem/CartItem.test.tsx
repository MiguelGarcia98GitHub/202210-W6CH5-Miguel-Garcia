import { Cartitem } from "./CartItem";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "./../../redux/store/store";

describe("Given the the CartItem component", () => {
    describe("When we render the item", () => {
        test("We should be able to use the button functionality", async () => {
            const mockItem = {
                id: 10,
                category: "phone",
                offer: false,
                price: 450,
                name: "TurboPhone 600",
                imageURL:
                    "https://thumb.pccomponentes.com/w-530-530/articles/66/662565/1995-pccom-gold-intel-core-i5-12600k-16gb-1tb-ssd-rtx3060ti-comprar.jpg",
                details: {
                    RAM: "16GB",
                    "Hard Drive": "512 GB",
                },
            };

            render(
                <Router>
                    <Provider store={appStore}>
                        <Cartitem item={mockItem} />
                    </Provider>
                </Router>
            );

            expect(screen.getByText(/TurboPhone/i)).toBeInTheDocument();
        });
    });
});
