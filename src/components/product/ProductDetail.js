import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductItem } from '../../actions/productAction';
import SectionHero from '../common/SectionHero';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';


const ProductDetail = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const id = match.params.id || '';
    const item = useSelector(state => state.products.item);
    
    

    useEffect(() => {
        dispatch(getProductItem(id.toString()));
    }, [dispatch, id]);

    
    const handleAddToCart = () => {
        const dataLocal = JSON.parse(localStorage.getItem("carts")) || [];
        const obj = _.find(dataLocal, {id: id});
        
        if(obj) {
            dataLocal.forEach(data => {
                if(data.id === id) {
                    data.quantity++;
                }
            })
        } else {
            dataLocal.push({...item, quantity: 1})
        }

        localStorage.setItem("carts", JSON.stringify(dataLocal));
    }
    const handleBuyNow = () => {
        const dataLocal = JSON.parse(localStorage.getItem("carts")) || [];
        const obj = _.find(dataLocal, {id: id});

        if(!obj) {
            dataLocal.push({...item, quantity: 1})
        } 

        localStorage.setItem("carts", JSON.stringify(dataLocal));
        history.push("/shopping-cart");
    }

    const html = item ?
        <div className="productDetail">
            <div className="productDetail__image">
                <img src={`/img/${item.img}`} alt="" />
            </div>
            <div className="productDetail__content">
                <h1 className="productDetail__name">
                    {item && item.name}
                </h1>
                <div className="productDetail__type">
                    <span className="type ttu">{item && item.type}</span>
                    <span className="ph1rem">|</span>
                    <span className="type">Sku : {item && item.sku}</span>
                    <span className="ph1rem">|</span>
                    <span className="status text-success">{item && item.status}</span>
                </div>
                <blockquote className="productDetail__desc">
                    {item && item.desc}
                </blockquote>
                <div className="productDetail__price">
                    <span className="currency">đ</span>
                    <span className="price">
                        {item && item.price}
                        <small>.000</small>
                    </span>
                </div>
                <div className="productDetail__btns btns">
                    <button
                        type="button"
                        className={`btn btn-block btn--primary`}
                        onClick={handleBuyNow}
                    >
                        Mua ngay
                    </button>
                    <button
                        type="button"
                        to="/shop"
                        className={`btn btn-block btn--secondary`}
                        onClick={handleAddToCart}
                    >
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
        : '';
    return (
        <React.Fragment>
            <SectionHero
                title="Product detail"
                desc="description"
                bg="../img/hero_1.jpeg"
            />
            <section className="section">
                <div className="container container--960px">
                    <div className="section__body">
                        {html}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ProductDetail;