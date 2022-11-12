import { IShopItem } from "./../../models/ShopItem";
import { useShopItems } from "./../../redux/hooks/useShopItems";

export const Cartitem = ({ item }: { item: IShopItem }) => {
    const { handleDelete } = useShopItems();

    return (
        <li key={item.id}>
            {item.name}{" "}
            <button
                onClick={() => {
                    handleDelete(item);
                }}
            >
                -
            </button>{" "}
        </li>
    );
};
