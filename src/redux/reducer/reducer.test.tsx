import { shopItemsReducer } from "./reducer";
import { actionTypes } from "./action.types";
import { IShopItem } from "../../models/ShopItem";

describe("Given the function taskReducer", () => {
    describe("Given the function shopItemsReducer", () => {
        const shopItemMock: IShopItem = {
            id: 2,
            category: "computer",
            offer: true,
            price: 750,
            name: "TurboPC 600",
            imageURL:
                "https://thumb.pccomponentes.com/w-530-530/articles/1004/10041781/1131-pccom-silver-intel-core-i5-12400f-16gb-500gb-ssd-rtx3050-pba-comprar.jpg",
            details: {
                RAM: "12GB",
                "Hard Drive": "500GB SSD",
                "Graphic Card": "GTX 3100",
            },
        };

        let action: { type: string; payload: unknown };
        let state: Array<IShopItem>;

        describe("When the action is load", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.load,
                    payload: [shopItemMock],
                };
                state = [];
            });
            test("Then the returned state should be the action payload", () => {
                const result = shopItemsReducer(state, action);
                expect(result).toEqual(action.payload);
            });
        });

        describe("When the action is add", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.add,
                    payload: shopItemMock,
                };
                state = [];
            });
            test("Then the returned state should include the action payload", () => {
                const result = shopItemsReducer(state, action);
                expect(result).toContainEqual(action.payload);
            });
        });

        describe("When the action is update", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.update,
                    payload: { ...shopItemMock, title: "Update task" },
                };
                state = [shopItemMock];
            });
            test("Then the returned state should include the action payload", () => {
                const result = shopItemsReducer(state, action);
                expect(result).toContainEqual(action.payload);
            });
        });

        describe("When the action is update and the id is not valid", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.update,
                    payload: { ...shopItemMock, id: "2", title: "Update task" },
                };
                state = [shopItemMock];
            });
            test("Then the returned state should be the original state", () => {
                const result = shopItemsReducer(state, action);
                expect(result).toEqual(state);
            });
        });

        describe("When the action is delete", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.delete,
                    payload: shopItemMock,
                };
                state = [shopItemMock];
            });
            test("Then the returned state should not include the action payload", () => {
                const result = shopItemsReducer(state, action);
                expect(result).toEqual([]);
            });
        });

        describe("When the action is delete and the id is not valid", () => {
            beforeEach(() => {
                action = {
                    type: actionTypes.delete,
                    payload: { ...shopItemMock, id: "2" },
                };
                state = [shopItemMock];
            });
            test("Then the returned state should should be the original state", () => {
                const result = shopItemsReducer(state, action);
                expect(result).toEqual(state);
            });
        });

        describe("When the action is any other", () => {
            beforeEach(() => {
                action = {
                    type: "",
                    payload: null,
                };
                state = [shopItemMock];
            });
            test("Then the returned state should be ...", () => {
                const result = shopItemsReducer(state, action);
                expect(result).toEqual(state);
            });
        });
    });
});
