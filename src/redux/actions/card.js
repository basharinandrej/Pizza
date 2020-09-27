
export const setPizzasCard = (obj) => {
    return {
        type: 'ADD_PIZZAS',
        payload: obj
    }
}


export const cleanCard = () => {
    return {
        type: 'CLEAN_CARD'
    }
}

export const removeItemCard = (id) => {
    return {
        type: 'REMOVE_ITEM_CARD',
        payload: id
    }
}

export const incrementItemPizza = (id) => {

    return {
        type: 'INCREMENT_ITEM_PIZZA',
        payload: id
    }
}

export const decrementItemPizza = (id) => {

    return {
        type: 'DECREMENT_ITEM_PIZZA',
        payload: id
    }
}