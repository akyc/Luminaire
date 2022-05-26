import React, { useState, useEffect } from 'react';
import ProducGridItem from './ProducGridItem';
import Loader from './Loader';

export default function ProductsGrid(props) {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(function () {
            setLoading(isLoading => !isLoading)
        }, 2500)
    }, [])
    return (<div className='grid__container'>
        {isLoading && props.products.map((el, i) => <Loader key={i} />)}
        {!isLoading ?
            (props.products.map((el, i) => {
                let categoryName
                for (let category of props.categories) {
                    if (category.id === el.category) {
                        categoryName = category.name
                    }
                }
                return (<ProducGridItem
                    key={i}
                    item={el}
                    category={categoryName}
                    onAdd={props.onAdd}
                />)
            })
            ) : null
        }

    </div>
    );
}
