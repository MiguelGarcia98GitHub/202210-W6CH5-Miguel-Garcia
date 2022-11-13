import { Cartitem } from '../cartitem/CartItem';
import { useShopItems } from './../../redux/hooks/useShopItems';
import { useEffect, useState } from 'react';
import { IShopItem } from '../../models/ShopItem';
export const Cart = () => {
    const { shopItems } = useShopItems();
    // const [totalValue, setTotalValue] = useState(0);

    // useEffect(() => {
    //     const calcTotalValue = (shopItems: Array<IShopItem>) =>
    //         shopItems.forEach((item) => {
    //             setTotalValue(totalValue + item.price);
    //         });

    //     calcTotalValue(shopItems);
    // }, []);

    return (
        <section>
            <ul>
                <span>CART</span>
                {shopItems.map((item) => {
                    return <Cartitem key={item.id} item={item} />;
                })}
            </ul>
            {/* <div>Total Price: {totalValue} $ </div> */}
        </section>
    );
};
