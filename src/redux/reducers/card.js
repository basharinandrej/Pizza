const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
};


const getTotalPrice = arr => arr.reduce((total, item) => item.price + total, 0)

export function reducerCard(state= initialState, action) {

    if (action.type === "ADD_PIZZAS") {

        const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload]

        const newItem = {
            ...state.items,
            // 3 нижние три строки выбирают объект
            [action.payload.id]: {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems)
            }
        }

        const items = Object.values(newItem).map(obj => obj.items);
        let allPizzas = [].concat.apply([], items);
        let totalPrice = getTotalPrice(allPizzas)


        return {
            ...state,
            items: newItem,
            totalCount: allPizzas.length,
            totalPrice
        }
    } else if (action.type === "CLEAN_CARD") {
        return {
            items: {},
            totalCount: 0,
            totalPrice: 0
        }
    } else if (action.type === "REMOVE_ITEM_CARD") {
        const cloneItems = {...state.items}
        const totalPrice = state.items[action.payload].totalPrice
        const totalCount = state.items[action.payload].items.length


        delete cloneItems[action.payload]

        return {
            items: cloneItems,
            totalCount: state.totalCount - totalCount,
            totalPrice: state.totalPrice - totalPrice
        }
    } else if (action.type === "INCREMENT_ITEM_PIZZA") {

        const newItems = [
            ...state.items[action.payload].items,
            state.items[action.payload].items[0]
        ]

        const totalPrice = state.items[action.payload].items[0].price

        return {
            ...state,
            items: {
                ...state.items,
                [action.payload]: {
                    items: newItems,
                    totalPrice: getTotalPrice(newItems)
                }
            },
            totalPrice: state.totalPrice + totalPrice,
            totalCount: state.totalCount + 1
        }
    } else if (action.type === "DECREMENT_ITEM_PIZZA") {








    }



    return state;
}




















