import { IShopItem } from "../../models/ShopItem";
import style from "./ShopItem.module.css";
import { useShopItems } from "./../../redux/hooks/useShopItems";

export const ShopItem = ({ item }: { item: IShopItem }) => {
    const { handleAdd } = useShopItems();

    return (
        <li className={style.shopitem}>
            {item.name}
            <button
                onClick={() => {
                    handleAdd(item);
                }}
            >
                +
            </button>
        </li>
    );
};
