import React, {useEffect, useRef, useState} from "react";



const Sort = React.memo(
    ({items, onClickSortType, activeSortItem}) => {
        const [showPopup, setShowPopup] = useState(false)
        // const [activeItem, setActiveItem] = useState(0)
        const activeLabel = items.find( obj => obj.type === activeSortItem).name;


        const sortBtnRef = useRef()
        const sortRef = useRef()





        // Закрываем Popup по клику на body и клику на кнопку "популярности"
        const clickBody = (e) =>{

            if (!e.path.includes(sortRef.current) && !e.path.includes(sortBtnRef.current)) {
                setShowPopup(false)
            }
        }

        // Переключаем Popup по клику на кнопку "популярности"
        const togglePopupHandler = () => {
            setShowPopup(!showPopup)
        }

        // Переключаем активный элемент в Popup
        const toggleActiveItem = (index) =>{
            onClickSortType(index)
            setShowPopup(false)
        }

        useEffect(()=>{
            document.body.addEventListener('click', clickBody)
        },[])

        return(
            <div className="sort">
                <div className="sort__label">
                    <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                    <b>Сортировка по:</b>
                    <span
                        onClick={togglePopupHandler}
                        ref={sortBtnRef}
                    >
                    {activeLabel}
                </span>
                </div>


                { showPopup && <div
                    ref={sortRef}
                    className="sort__popup">
                    <ul>
                        { items &&
                        items.map((obj, index)=>(
                            <li key={`${obj}_${index}`}
                                onClick={() => toggleActiveItem(obj.type)}
                                className={activeSortItem === obj.type ? 'active' : ''}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div> }
            </div>
        )
    });

export default Sort