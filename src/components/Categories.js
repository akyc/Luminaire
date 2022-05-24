import React from 'react'

export default function Categories(props) {
    return (
        <div className='categories'>
            <h2>Каталог</h2>
            <ul className='categories-list'>
                <li className="active" onClick={() => props.chooseCategory(0)}>Все</li>
                {props.categories.map(el => (<li key={el.id} onClick={() => props.chooseCategory(el.id)}>{el.name}</li>))}
            </ul>
        </div>
    )
}
