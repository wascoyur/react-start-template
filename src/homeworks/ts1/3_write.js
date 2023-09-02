// eslint-disable-next-line import/no-unresolved
import { getData } from 'src/mock-data/mock-products';
const getRandomProducts = () => {
    return getData();
};
export const createRandomProduct = (createdAt) => {
    const mockProducts = getRandomProducts();
    const products = mockProducts.map((item) => {
        const { id, description, image, title, price, category } = item;
        const oldPrice = parseInt((parseInt(price) * Math.random() * 10).toFixed(2));
        const product = {
            desc: description,
            name: title,
            photo: image,
            oldPrice: oldPrice,
            category: { id: id, name: category, photo: image },
            createdAt: createdAt,
            price: parseInt(price),
            id: id,
        };
        return product;
    });
    const rndIndx = Math.floor(Math.random() * mockProducts.length);
    return products[rndIndx];
};
/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt) => {
    const getRandomCategory = () => {
        // Генерация случайной категории (здесь вам нужно реализовать свою логику получения случайной категории)
        const categories = [
            { id: '1', name: 'Category 1' },
            { id: '2', name: 'Category 2' },
            { id: '3', name: 'Category 3' },
            { id: '3', name: 'Category 4' },
        ];
        const randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    };
    const getRandomAmount = () => {
        // Генерация случайного значения amount (здесь вам нужно реализовать свою логику генерации случайного значения)
        return Math.floor(Math.random() * 100);
    };
    const getRandomType = () => {
        // Генерация случайного типа ('Cost' или 'Profit')
        return Math.random() > 0.5 ? 'Profit' : 'Cost';
    };
    const operations = [];
    for (let i = 0; i < 3; i++) {
        const category = getRandomCategory();
        const amount = getRandomAmount();
        const type = getRandomType();
        const operation = {
            type,
            id: category.id,
            name: category.name,
            amount,
            category,
            createdAt: createdAt,
            desc: 'description',
        };
        operations.push(operation);
    }
    const operationIdx = Math.floor(Math.random() * operations.length);
    return operations[operationIdx];
};
//# sourceMappingURL=3_write.js.map