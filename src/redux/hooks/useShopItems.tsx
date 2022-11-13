import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../store/store";

import * as ac from "../reducer/action.creator";
import { ShopItemsRepository } from "../services/shopItem.repository";
import { IShopItem } from "./../../models/ShopItem";

export const useShopItems = () => {
    const shopItems = useSelector((state: rootState) => state.shopItems);
    const dispatcher = useDispatch();
    const apiShop = useMemo(() => new ShopItemsRepository(), []);

    useEffect(() => {
        apiShop
            .getAll()
            .then((shopItems) => dispatcher(ac.loadActionCreator(shopItems)));
    }, [apiShop, dispatcher]);

    const handleAdd = (newShopItem: IShopItem) => {
        apiShop
            .create(newShopItem)
            .then((item: IShopItem) => dispatcher(ac.addActionCreator(item)));
    };

    const handleDelete = (shopItem: IShopItem) => {
        apiShop
            .delete(shopItem)
            .then(() => dispatcher(ac.deleteActionCreator(shopItem)));
    };

    return {
        shopItems,
        handleAdd,
        handleDelete,
    };
};
