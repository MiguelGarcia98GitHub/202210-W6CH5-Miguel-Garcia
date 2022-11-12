import { ShopItemsRepository } from "./shopItem.repository";
describe("Given TaskApi Service", () => {
    describe("When we instantiate it", () => {
        let service: ShopItemsRepository;
        beforeEach(() => {
            service = new ShopItemsRepository();
        });
        test(`Then if I use service.getAll() 
            it should return a Promise of an Array of Task`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if I use service.getAll() with process.env value 
            it should return a Promise of an Array of Task`, async () => {
            process.env.REACT_APP_URL_SHOPITEMS =
                "https://w6ch5-backend.onrender.com/cart";
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if I use service.getAll() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockResolvedValue("errors");
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual("error");
        });
    });
});
