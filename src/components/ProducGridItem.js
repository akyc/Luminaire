import React, { Component } from 'react'

export default class ProducGridItem extends Component {
    render() {
        return (
            <div className='grid__item'>
                <img src={this.props.item.img} alt={this.props.item.name} />
                <div className="product-info">
                    <small>{this.props.category}</small>
                    <div className='controls'>
                        <span className='price'>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(this.props.item.price)}</span>
                        <span className='add-basket' onClick={() => this.props.onAdd(this.props.item)}>+</span>
                    </div>
                    <span className='name'>{this.props.item.name}</span>
                </div>
            </div>
        )
    }
}  