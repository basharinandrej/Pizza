import React from "react";
import {Filter, Sort, PizzaItem} from "../../components/index";
import {useDispatch, useSelector} from "react-redux";


import {setCategoryBy, setSortBy} from "../../redux/actions/filter";
import {fetchPizzas} from "../../redux/actions/pizzas";
import PizzaLoaderItem from "../../components/PizzaItem/PizzaLoaderItem";
import {setPizzasCard} from "../../redux/actions/card";


const selectCategorys = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortArray = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'name'}
];


// let oldFunc = null;

const Home = () => {

    // проверка на rerender filters.js
    // window.test = () => {
    //     axios.get('http://localhost:3000/pizzas?_order=asc&_sort=price').then(({ data }) => {
    //         dispatch(setPizzasAction(data.pizzas));
    //     })
    // }
    // console.log(oldFunc === onSelectCategory);
    // oldFunc = onSelectCategory;

    const dispatch = useDispatch();
    // useSelector принимает state
    const { items, isLoader } = useSelector(({ pizzas }) => {
        return  {
            items: pizzas.items,
            isLoader: pizzas.isLoaded
        }
    })
    const { category, sortBy } = useSelector(({ filter }) => filter)
    const addedCount = useSelector(({ card }) => card.items)


    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);


    // По-моему useCallback не разрешает ререндер
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setSortBy(index));

    }, []);

    const onClickSortType = React.useCallback((type) => {
        dispatch(setCategoryBy(type));
    }, []);



    const handleAddPizzasToCard = (obj) =>{
        dispatch(setPizzasCard(obj))
    }


    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <div className="categories">
                        <Filter
                            items={selectCategorys}
                            activeCategory={category}
                            onClickItem={onSelectCategory}
                        />
                    </div>
                    <Sort
                        items={sortArray}
                        activeSortItem={sortBy}
                        onClickSortType={onClickSortType}
                    />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoader ?
                    items.map(item =>(
                        <PizzaItem
                            key={item.id}
                            {...item}
                            onClickPizza={ handleAddPizzasToCard }
                            addedCount={addedCount[item.id] && addedCount[item.id].items.length}

                        />))
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <PizzaLoaderItem key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home