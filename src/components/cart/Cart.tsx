import { Cartitem } from "../cartitem/CartItem";
import { useShopItems } from "./../../redux/hooks/useShopItems";
export const Cart = () => {
    const { shopItems } = useShopItems();

    return (
        <section>
            <ul>
                <span>CART</span>
                {shopItems.map((item) => {
                    return <Cartitem key={item.id} item={item} />;
                })}
            </ul>
        </section>
    );
};
