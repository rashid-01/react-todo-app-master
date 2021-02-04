import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Chinese food -  Block A',
            completed: false
        },
        {
            id: 2,
            text: 'Sandwiches -  Block D',
            completed: false
        },
        {
            id: 4,
            text: 'Coffee, tea and cakes - Barakhamba Road in front of metro station',
            completed: false
        },
        {
            id: 5,
            text: 'India food - Rajma, subji, roti, chawal, - KG Marg in front of British council',
            completed: false
        },
        {
            id: 6,
            text: 'Chaat -  Block N',
            completed: false
        },
        {
            id: 7,
            text: 'Chinese food - in front of Mandi House',
            completed: false
        },
        {
            id: 8,
            text: 'Chaat - near Shankar market',
            completed: false
        },
        {
            id: 9,
            text: 'Patties and burgers - Block P',
            completed: false
        },
        {
            id: 10,
            text: 'Chinese food - Near Regal cinema',
            completed: false
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
