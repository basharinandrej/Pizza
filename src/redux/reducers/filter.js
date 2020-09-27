const initialState = {
    category: null,
    sortBy: 'popular'
}

export function filterReducer( state= initialState, action ) {

    if (action.type === "SET_SORT_BY") {
        return  {
            ...state,
            category: action.payload
        }
    } else if (action.type === "SET_CATEGORY_BY") {
        return  {
            ...state,
            sortBy: action.payload
        }
    }

    return state
}

