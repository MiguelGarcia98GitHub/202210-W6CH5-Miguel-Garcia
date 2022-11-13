import { render, renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { ShopItemsRepository } from '../../redux/services/shopItem.repository';
import { appStore } from './../../redux/store/store';
import { Cart } from './Cart';
import { useShopItems } from './../../redux/hooks/useShopItems';
import { IShopItem } from '../../models/ShopItem';

jest.mock('../../redux/services/shopItem.repository');

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

describe('Given Cart component', () => {
    describe('When we render the component', () => {
        // TEST FUNCIONA
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                .mockResolvedValue([product1, product2]);
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
        test('Then it should paint some items in the screen', () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Cart />
                    </Provider>
                </Router>
            );
        });
    });
});
