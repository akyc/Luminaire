import React, { Component } from 'react';
import ProducGridItem from './ProducGridItem';

class ProductsGrid extends Component {
    render() {
        return (
            <div className='grid__container'>
                {this.props.products.map((el, i) => {
                    let categoryName
                    // categroyName = this.props.categories.filter(el => el.id === categoryId)[0]?.name || ''
                    for (let category of this.props.categories) {
                        if (category.id === el.category) {
                            categoryName = category.name
                        }
                    }
                    return (<ProducGridItem
                        key={i}
                        item={el}
                        category={categoryName}
                        onAdd={this.props.onAdd}
                    />)
                })}
            </div>
        );
    }
}

export default ProductsGrid;