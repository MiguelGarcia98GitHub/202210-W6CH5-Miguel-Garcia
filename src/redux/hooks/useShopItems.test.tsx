import { renderHook, waitFor } from '@testing-library/react';
import { useShopItems } from './useShopItems';
import { IShopItem } from './../../models/ShopItem';

import { Provider } from 'react-redux';
import { appStore } from '../store/store';
import { ShopItemsRepository } from './../services/shopItem.repository';

jest.mock('./../services/shopItem.repository');

const product1 = {
    id: 6,
    category: 'phone',
    offer: true,
    price: 200,
    name: 'TurboPhone 100',
    imageURL:
        'https://thumb.pccomponentes.com/w-530-530/articles/66/662565/1995-pccom-gold-intel-core-i5-12600k-16gb-1tb-ssd-rtx3060ti-comprar.jpg',
    details: {
        RAM: '4GB',
        'Hard Drive': '64 GB',
    },
};
const product2 = {
    id: 7,
    category: 'phone',
    offer: true,
    price: 250,
    name: 'TurboPhone 200',
    imageURL:
        'https://thumb.pccomponentes.com/w-530-530/articles/66/662565/1995-pccom-gold-intel-core-i5-12600k-16gb-1tb-ssd-rtx3060ti-comprar.jpg',
    details: {
        RAM: '6GB',
        'Hard Drive': '128 GB',
    },
};

describe('Given', () => {
    let result: {
        current: {
            shopItems: Array<IShopItem>;
            handleAdd: (newProduct: IShopItem) => void;
            handleDelete: (shopItem: IShopItem) => void;
        };
    };

    beforeEach(() => {
        ShopItemsRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([product1]);
        ShopItemsRepository.prototype.create = jest
            .fn()
            .mockResolvedValue(product2);
        ShopItemsRepository.prototype.delete = jest
            .fn()
            .mockResolvedValue(product2);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useShopItems(), { wrapper }));
    });

    test('should first b', async () => {
        await waitFor(() => {
            result.current.handleAdd(product2);
            expect(result.current.shopItems.at(-1)).toEqual(product2);
        });
    });

    test('should first c', async () => {
        await waitFor(() => {
            result.current.handleDelete(product1);
            expect(result.current.shopItems.at(-1)).toEqual(product1);
        });
    });
});
