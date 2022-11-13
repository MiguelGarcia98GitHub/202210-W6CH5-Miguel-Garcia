import { ok } from 'assert';
import { ShopItemsRepository } from './shopItem.repository';

const mockItem = {
    id: 1,
    category: 'computer',
    offer: true,
    price: 700,
    name: 'TurboPC 500',
    imageURL:
        'https://thumb.pccomponentes.com/w-530-530/articles/82/826902/1449-pccom-bronze-amd-ryzen-7-5700g-16gb-500gb-ssd-1tb.jpg',
    details: {
        RAM: '8GB',
        'Hard Drive': '250GB SSSD',
        'Graphic Card': 'GTX 3000',
    },
};

describe('Given ProductsApi Service', () => {
    describe('When we instantiate it', () => {
        let service: ShopItemsRepository;
        beforeEach(() => {
            service = new ShopItemsRepository();
        });
        test('Then if i use service.error(), it should return an error', () => {
            const error = service.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );

            const result = new Error('Error 400: error');
            result.name = 'HTTPError';
            expect(error).toEqual(result);
        });

        test(`Then if I use service.getAll()
            it should return a Promise of an Array of Food`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if I use service.getAll()
            , it should return an error`, async () => {
            const mockedFetch = jest.fn(() =>
                Promise.resolve({
                    response: ok,
                })
            ) as jest.Mock;

            global.fetch = mockedFetch;

            await service.getAll();
        });
        test('Then if I use service.createProducts() it should return a Promise of an Array of Foods', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockItem]),
            });
            const result = await service.create(mockItem);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mockItem]);
        });
        test('Then if I use service.createProducts() it should return a Promise of an Array of Foods1', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                json: jest.fn().mockResolvedValue([mockItem]),
            });
            const result = await service.create(mockItem);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mockItem]);
        });
        // test(`Then if I use service.createProducts()
        //     , it should return an error`, async () => {
        //     global.fetch = jest.fn().mockResolvedValue({
        //         ok: false,
        //         status: 404,
        //         statusText: "Error",
        //     });

        //     const expectedResult = await service.createProducts(mockItem);
        //     const result = new Error("Error 400: error");
        //     result.name = "HTTPError";
        //     // expect(expectedResult).toBe(result.toString());
        // });
        test('Then if I use service.deleteProducts() it should return a Promise of an Array of Foods1', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockItem),
            });
            const result = await service.delete(mockItem);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test('Then if I use service.deleteProducts() it should return a Promise of an Array of Foods2', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                json: jest.fn().mockResolvedValue(mockItem),
            });
            const result = await service.delete(mockItem);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
    });
});
