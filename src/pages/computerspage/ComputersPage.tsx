import { Cart } from "../../components/cart/Cart";
import { Header } from "../../components/header/Header";
import { ShopItemList } from "../../components/shopitemlist/ShopItemList";

export const ComputersPage = () => {
    return (
        <>
            <Header />
            <ShopItemList />
            <Cart />
        </>
    );
};
