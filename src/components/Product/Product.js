import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <h3>{seller}</h3>
            <h4>{price}</h4>
            <p>{ratings}</p>
        </div>
    );
};

export default Product;