const initialState = {
    items: [],
    isLoaded: false
}

export function pizzasReducer(state = initialState, action) {

    if (action.type === "SET_PIZZAS") {
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    } else if (action.type === "SET_LOADED") {
        return {
            ...state,
            isLoaded: action.payload
        }
    }

    return state
}



