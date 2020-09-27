// import React, {useState} from "react";
// import classNames from "classnames"
// import PropTypes from 'prop-types'
//
//
// const PizzaItem = ({name, imageUrl, price, types, sizes}) =>{
//     const [typePizza, setTypePizza] = useState(types[0])
//     const [sizePizza, setSizePizza] = useState(types[0])
//     const availableTypes = ['тонкое', 'традиционное']
//     const availableSizes = [26, 30, 40]
//
//     const typePizzaHandler = (index) => {
//         setTypePizza(index)
//     }
//
//     const sizePizzaHandler = (index) =>{
//         setSizePizza(index)
//     }
//
//
//     return (
//         <div className="pizza-block">
//             <img
//                 className="pizza-block__image"
//                 src={imageUrl}
//                 alt="Pizza"
//             />
//             <h4 className="pizza-block__title">
//                 { name }
//             </h4>
//             <div className="pizza-block__selector">
//                 <ul>
//                     {availableTypes.map((item, index) => (
//                         <li
//                             key={`${item}_${index}`}
//                             onClick={() => typePizzaHandler(index)}
//                             className={classNames({
//                                 active: typePizza === index,
//                                 disabled: !types.includes(index)
//                             })}
//                         >
//                             {item}
//                         </li>
//                     ))}
//                 </ul>
//
//                 <ul>
//                     {availableSizes.map((size, index) => (
//                         <li
//                             key={`${size}_${index}`}
//                             onClick={()=> sizePizzaHandler(index)}
//                             className={classNames({
//                                 active: sizePizza === index,
//                                 disabled: !sizes.includes(size)
//                             })}
//                         >
//                             { size } см.
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="pizza-block__bottom">
//                 <div className="pizza-block__price">от {price} ₽</div>
//                 <div className="button button--outline button--add">
//                     <svg
//                         width="12"
//                         height="12"
//                         viewBox="0 0 12 12"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
//                             fill="white"
//                         />
//                     </svg>
//                     <span>Добавить</span>
//                     <i>2</i>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
//
// PizzaItem.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     types: PropTypes.arrayOf(PropTypes.number).isRequired,
//     sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
//     price: PropTypes.number.isRequired,
//     category: PropTypes.number.isRequired,
//     rating: PropTypes.number.isRequired
// }
//
// PizzaItem.defaultProps = {
//     name: "Нет инфы из json",
//     types: [],
//     sizes: []
// };
//
// export default PizzaItem



import React, {useState} from 'react';
import cn from 'classnames'


// Сделать деструктуризацию props
const PizzaItem = (props) => {
    const [type, setType] = useState(props.types[0]);
    const [sizePizza, setSizePizza] = useState(props.types[0]);
    const types = ['тонкое', 'традиционное'];
    const size = [26, 30, 40];


    const setTypeHandler = (index) => {
        setType(index)
    }

    const setSizePizzaHandler = (index) => {
        setSizePizza(index)
    }

    const onClickAddPizza = () => {
        const obj = {
            id: props.id,
            name: props.name,
            imageUrl: props.imageUrl,
            price: props.price,
            types: types[type],
            size: size[sizePizza]
        }

        props.onClickPizza(obj)
    }




    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={props.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">
                {props.name}
            </h4>

            <div className="pizza-block__selector">
                <ul>
                    { types.map((item, index) => {
                        return (
                            <li key = {`${item} + ${index}`}
                                onClick={() => setTypeHandler(index)}
                                className={ cn({
                                    active: type === index,
                                    disabled: !props.types.includes(index)
                                })} >
                                {item}
                            </li>
                        )
                    })}
                </ul>

                <ul>
                    { size.map((size, index) => {
                        return (
                            <li key={`${size}_${index}`}
                                onClick={() => setSizePizzaHandler(index)}
                                className={ cn({
                                    active: sizePizza === index,
                                    disabled: !props.sizes.includes(size)
                                })} >
                                {size} см.
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div onClick={ onClickAddPizza } className="pizza-block__bottom">
                <div className="pizza-block__price">от {props.price} ₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    { props.addedCount && <i>{props.addedCount}</i>}
                </div>
            </div>
        </div>
    )
}




export default PizzaItem




