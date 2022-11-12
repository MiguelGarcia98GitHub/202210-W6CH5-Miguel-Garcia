/* eslint-disable array-callback-return */
import { useShopItems } from "../../redux/hooks/useShopItems";
import { ShopItem } from "../shopitem/ShopItem";
import { useState, useEffect } from "react";
import { IShopItem } from "./../../models/ShopItem";

export const ShopItemList = () => {
    const currentPath = window.location.pathname;
    const [externalAPIData, setExternalAPIData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getExternalAPIData() {
            fetch(`https://w6ch5-backend.onrender.com/items`)
                .then((response) => response.json())
                .then((data) => {
                    setExternalAPIData(data);
                    setLoading(false);
                });
        }
        getExternalAPIData();
    }, [externalAPIData.length]);

    return (
        <ul>
            {currentPath === "/offers" &&
                !loading &&
                externalAPIData.map((item: IShopItem) => {
                    if (item.offer) {
                        return <ShopItem key={item.id} item={item} />;
                    }
                })}

            {currentPath === "/phones" &&
                !loading &&
                externalAPIData.map((item: IShopItem) => {
                    if (item.category === "phone") {
                        return <ShopItem key={item.id} item={item} />;
                    }
                })}

            {currentPath === "/computers" &&
                !loading &&
                externalAPIData.map((item: IShopItem) => {
                    if (item.category === "computer") {
                        return <ShopItem key={item.id} item={item} />;
                    }
                })}
        </ul>
    );
};
