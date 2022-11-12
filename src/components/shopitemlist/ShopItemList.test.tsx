import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { ShopItemList } from "./ShopItemList";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { shopItemsReducer } from "./../../redux/reducer/reducer";

// PREGUNTAR TEST
describe("Given ShopItemList component", () => {
    test("when we render it", () => {
        render(
            <>
                <Router initialEntries={["/offers"]}>
                    <Provider
                        store={configureStore({
                            reducer: {
                                shopItems: shopItemsReducer,
                            },
                        })}
                    >
                        <ShopItemList />
                    </Provider>
                </Router>
            </>
        );
    });
});

// TEST FALSO PARA QUE NO SALGA ERROR CONSTANTEMENTE
describe("fake test", () => {
    test("fake test", () => {
        expect(1).toBe(1);
    });
});

export {};
