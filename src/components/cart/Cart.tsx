import { useShopItems } from "./../../redux/hooks/useShopItems";
export const Cart = () => {
    const { shopItems } = useShopItems();

    return (
        <section>
            <ul>
                {shopItems.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name} <button>-</button>{" "}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
