import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductItem } from '../../actions/productAction';


const ProductDetail = ({ match }) => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.products.item);
    useEffect(() => {
        const id = match.params.id || '0';
        dispatch(getProductItem(id.toString()));
    },[]);
    const html = item ? 
        <div className="productDetail">
            <div className="productDetail__image">
                <img 
                    src=""
                    alt=""
                />
            </div>
            <div className="productDetail__content">
                <h1 className="productDetail__name">
                    {item && item.name}
                </h1>
                <div className="productDetail__type">
                    {item && item.type}
                </div>
                <blockquote className="productDetail__desc">
                    {item && item.desc}
                </blockquote>
                <div className="productDetail__price">
                    <span className="price">
                        {item && item.price}
                    </span>
                </div>
                <div className="productDetail__btns btns">
                    <button 
                        type="button" 
                        className="btn btn-block btn--primary"
                    >
                            add to cart
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-block btn--secondary"
                    >
                            continue shopping
                    </button>
                </div>
            </div>
        </div>
        : '';
    return (
        <section className="section">
            <div className="container ph1rem">
                <div className="section__header">
                    <h1 className="section__title tc">Product detail</h1>
                </div>
                <div className="section__body">
                    {html}
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;