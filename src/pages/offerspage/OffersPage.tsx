import { Header } from "../../components/header/Header";
import { ShopItemList } from "../../components/shopitemlist/ShopItemList";
import { Cart } from "./../../components/cart/Cart";

export const OffersPage = () => {
    return (
        <>
            <Header />
            <ShopItemList />
            <Cart />
        </>
    );
};
