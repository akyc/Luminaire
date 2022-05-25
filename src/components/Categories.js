import React from 'react'

export default function Categories(props) {
    return (
        <div className='categories'>
            <h2>Каталог</h2>
            <ul className='categories-list'>
                <li className={props.selectedCategory === 0 ? 'active' : null} onClick={() => props.chooseCategory(0)}>Все</li>
                {props.categories.map(el => (<li key={el.id} className={props.selectedCategory === el.id ? 'active' : null} onClick={() => props.chooseCategory(el.id)}>{el.name}</li>))}
            </ul>
        </div>
    )
}
