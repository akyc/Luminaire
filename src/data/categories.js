const categories = [
    {
        id: 1,
        name: 'Освещение для дома',
        parent: 0,
    },
    {
        id: 2,
        name: 'Уличные светильники',
        parent: 0,
    },
    {
        id: 6,
        name: 'Люстры',
        parent: 1,
    },
    {
        id: 7,
        name: 'Подвесные светильники',
        parent: 1,
    },
    {
        id: 8,
        name: 'Архитектурная подсветка',
        parent: 2,
    },
    {
        id: 9,
        name: 'Уличные фонари',
        parent: 2,
    },
    {
        id: 10,
        name: 'Настенные светильники',
        parent: 1,
    },
];

export function getCategories() {
    return categories
}
