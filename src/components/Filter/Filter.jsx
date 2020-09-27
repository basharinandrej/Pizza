import React from "react";



const Filter = React.memo(
    ({ activeCategory, items, onClickItem }) =>{


        return(
            <ul>
                <li className={activeCategory === null ? "active" : ''}
                    onClick={() => onClickItem(null)}
                >
                    Все1
                </li>


                {items &&
                items.map((item, index) => (
                    <li key={`${index}_${item}`}
                        onClick={() => onClickItem(index)}
                        className={activeCategory === index ? "active" : ''}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        )
    }
);


export default Filter