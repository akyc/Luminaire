const products = [
    {
        id: 1,
        article: 'a058078',
        brand: 1,
        name: 'Потолочная люстра',
        img: 'https://cdn.minimir.ru/images/catalog/1a058078_0001.jpg',
        price: 66431,
        category: 6,
    },
    {
        id: 2,
        article: 'a058347',
        brand: 2,
        name: 'Подвесная люстра',
        img: 'https://cdn.minimir.ru/images/catalog/1a058347_0002.jpg',
        price: 41900,
        category: 6,
    },
    {
        id: 3,
        article: 'a059886',
        brand: 3,
        name: 'Подвесная люстра',
        img: 'https://cdn.minimir.ru/images/catalog/1a059886_0001.jpg',
        price: 10400,
        category: 7,
    },
    {
        id: 4,
        article: 'a055632',
        brand: 4,
        name: 'Ландшафтный светильник Roil',
        img: 'https://cdn.minimir.ru/images/catalog/1a055632_0001.jpg',
        price: 4510,
        category: 9,
    },
    {
        id: 5,
        article: 'a051822',
        brand: 4,
        name: 'Пылевлагозащищенный светодиодный светильник Белый IP54',
        img: 'https://cdn.minimir.ru/images/catalog/1a051822_0004.jpg',
        price: 6930,
        category: 8,
    },
];

export function getProducts() {
    return products
}