import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { ShopItemList } from './ShopItemList';
import { render } from '@testing-library/react';
import { appStore } from '../../redux/store/store';

// PREGUNTAR TEST
describe('Given ShopItemList component', () => {
    const mockItem1 = {
        id: 1,
        category: 'computer',
        offer: true,
        price: 700,
        name: 'TurboPC 500',
        imageURL:
            'https://thumb.pccomponentes.com/w-530-530/articles/82/826902/1449-pccom-bronze-amd-ryzen-7-5700g-16gb-500gb-ssd-1tb.jpg',
        details: {
            RAM: '8GB',
            'Hard Drive': '250GB SSD',
            'Graphic Card': 'GTX 3000',
        },
    };
    const mockItem2 = {
        id: 2,
        category: 'phone',
        offer: true,
        price: 500,
        name: 'Phone 500',
        imageURL:
            'https://thumb.pccomponentes.com/w-530-530/articles/82/826902/1449-pccom-bronze-amd-ryzen-7-5700g-16gb-500gb-ssd-1tb.jpg',
        details: {
            RAM: '4GB',
            'Hard Drive': '120GB SSD',
        },
    };
    const mockItem3 = {
        id: 2,
        category: 'phone',
        offer: false,
        price: 500,
        name: 'Phone 500',
        imageURL:
            'https://thumb.pccomponentes.com/w-530-530/articles/82/826902/1449-pccom-bronze-amd-ryzen-7-5700g-16gb-500gb-ssd-1tb.jpg',
        details: {
            RAM: '4GB',
            'Hard Drive': '120GB SSD',
        },
    };

    test('when we render it', () => {
        window.location.pathname = '/offers';

        global.fetch = jest.fn().mockResolvedValue(
            Promise.resolve({
                json: jest
                    .fn()
                    .mockResolvedValue([mockItem1, mockItem2, mockItem3]),
            })
        );

        render(
            <>
                <Router>
                    <Provider store={appStore}>
                        <ShopItemList />
                    </Provider>
                </Router>
            </>
        );
    });
});
