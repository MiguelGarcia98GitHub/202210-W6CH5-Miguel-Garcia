import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../store/store";

import * as ac from "../reducer/action.creator";
import { ShopItemsRepository } from "../services/shopItem.repository";
import { IShopItem } from "./../../models/ShopItem";

export const useShopItems = () => {
    const shopItems = useSelector((state: rootState) => state.shopItems);
    const dispatcher = useDispatch();
    const apiTask = useMemo(() => new ShopItemsRepository(), []);

    useEffect(() => {
        apiTask
            .getAll()
            .then((shopItems) => dispatcher(ac.loadActionCreator(shopItems)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiTask, dispatcher]);

    const handleAdd = (newShopItem: IShopItem) => {
        apiTask
            .create(newShopItem)
            .then((item: IShopItem) => dispatcher(ac.addActionCreator(item)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        shopItems,
        handleAdd,
    };
};
