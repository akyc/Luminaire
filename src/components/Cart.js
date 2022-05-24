import React, { Component } from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'

export default class Cart extends Component {
    render() {
        return (
            <div className='cart-item'>
                <div>
                    <img src={this.props.item.product.img} alt={this.props.item.product.title} />
                    <span className='cart-item__info'>
                        <b>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(this.props.item.product.price)}</b> <br />
                        {this.props.item.product.name}
                    </span>

                </div>
                <span className='cart-item__count'>&times;&nbsp;{this.props.item.count}</span>
                <span className='remove-item' onClick={() => this.props.onRemove(this.props.item.product.id)}><RiCloseCircleFill size="18px" /></span>
            </div>
        )
    }
}
