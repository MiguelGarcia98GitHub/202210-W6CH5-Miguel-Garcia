export interface IShopItem {
    id: number;
    category: string;
    offer: boolean;
    price: number;
    name: string;
    imageURL: string;
    details: {
        RAM: string;
        "Hard Drive": string;
        "Graphic Card": string;
    };
}
