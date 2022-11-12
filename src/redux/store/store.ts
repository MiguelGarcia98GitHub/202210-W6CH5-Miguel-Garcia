import { configureStore } from "@reduxjs/toolkit";
import { shopItemsReducer } from "../reducer/reducer";

export const appStore = configureStore({
    reducer: {
        shopItems: shopItemsReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
