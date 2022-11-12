import { IShopItem } from "../../models/ShopItem";
import { createAction } from "@reduxjs/toolkit";

import { actionTypes } from "./action.types";

export const loadActionCreator = createAction<Array<IShopItem>>(
    actionTypes.load
);

export const addActionCreator = createAction<IShopItem>(actionTypes.add);

export const updateActionCreator = createAction<IShopItem>(actionTypes.update);

export const deleteActionCreator = createAction<IShopItem>(actionTypes.delete);
