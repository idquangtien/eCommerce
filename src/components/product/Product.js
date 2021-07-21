import React from 'react';
import { Link } from 'react-router-dom';


// https://dash.fortnite-api.com/

const Product = ({item}) => {
    const html = item && (item !== {}) ? 
        <div className="product">
            <Link to={`/shop/${item && item.id ? item.id : ''}`} className="product__image">
                <img src={`./img/${item.img}`} alt=""/>
            </Link>
            <div className="product__content">
                <Link to={`/shop/${item && item.id ? item.id : ''}`} className="product__name">
                    {item.name}
                </Link>
                <div className="product__type">
                </div>
                
                <blockquote className="product__desc">
                </blockquote>
                <div className="product__price">
                    <u>đ</u>
                    <span>{item.price}</span>
                </div>
            </div>
        </div>
        : '';
    return html;
}
export default Product;