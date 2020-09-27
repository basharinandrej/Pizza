import React from 'react';

import ContentLoader from "react-content-loader"



const PizzaLoaderItem = () =>{


    // Заглушки
    return(
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={300}
            height={400}
            viewBox="0 0 300 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="134" cy="116" r="112" />
            <rect x="24" y="240" rx="0" ry="0" width="223" height="20" />
            <rect x="23" y="267" rx="0" ry="0" width="224" height="44" />
            <rect x="27" y="318" rx="0" ry="0" width="89" height="34" />
            <rect x="124" y="318" rx="19" ry="19" width="121" height="53" />
        </ContentLoader>
    )
}

export default PizzaLoaderItem;