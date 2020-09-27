import { combineReducers } from "redux";


import { pizzasReducer } from "./pizzas";
import { filterReducer } from "./filter"
import { reducerCard } from "./card"


export default combineReducers({
    pizzas: pizzasReducer,
    filter: filterReducer,
    card: reducerCard
})