import React from 'react';
import Product from './Product';


const ProductList = ({list}) => {
    const html = list && (list.length > 0) ? 
        <div className="products products--grid">
            {list.map((item, index) => <Product key={index} item={item}/>)}
        </div>
        :'';
    return html;
}

export default ProductList;